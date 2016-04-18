'use strict';

var Reflux = require('reflux');
var GroupActions = require('../../actions/group/group-actions');
var superagent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');
var constant = require('../../../../mixin/constant');
var page = require('page');

var GroupStore = Reflux.createStore({
  listenables: [GroupActions],

  onLoadIndex: function (id) {
    superagent.get('/api/group/info')
        .set('Content-Type', 'application/json')
        .query({groupId: id})
        .use(errorHandler)
        .end((err, res) => {
          if(err){
            console.log(err);
          }else {
            this.trigger({
              memberNumber: res.body.memberNumber,
              announcement: res.body.announcement || '',
              paperNumber: 0,
              groupName: res.body.groupName,
              avatar: res.body.avatar || ''
            });
          }
        });

  },

  onLoadGroup: function () {
    superagent.get('/api/group')
      .set('Content-Type', 'application/json')
      .use(errorHandler)
      .end((err, res) => {
        if (!res.body) {
          return;
        } else if (res.body.status === constant.httpCode.OK) {
          this.trigger({
            groups: res.body.groups,
            role: res.body.role
          });
        }else if(res.body.status === constant.httpCode.NOT_FOUND) {
          console.log(res.body.role);
          this.trigger({
            groups: [],
            role: res.body.role
          });
        } else {
          console.log(res.body.status);
        }
      })
  },

  onCreateGroup: function (){
   superagent.post('/api/group')
       .set('Content-Type', 'application/json')
       .use(errorHandler)
       .end((err, res) => {
         if(err){
           console.log(err);
         }else {
           page('/'+ res.body.groupHash + '/manage');
         }
       })
  },

  onSubmitInfo: function (data){
    superagent.put('/api/group')
        .set('Content-Type', 'application/json')
        .send(data)
        .use(errorHandler)
        .end((err, res) => {
          if(err){
            console.log(err);
          }else if(res.body.status === constant.httpCode.OK){
            page('/group');
          }
        })
  }
});

module.exports = GroupStore;