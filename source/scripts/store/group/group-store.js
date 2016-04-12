'use strict';

var Reflux = require('reflux');
var GroupActions = require('../../actions/group/group-actions');
var superAgent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var GroupStore = Reflux.createStore({
  listenables: [GroupActions],

  onLoadIndex: function (id) {
    superAgent.get('/api/group/info')
        .set('Content-Type', 'application/json')
        .query({groupId: id})
        .use(errorHandler)
        .end((err, res) => {
          if(err){
            console.log(err);
          }else {
            this.trigger({
              memberNumber: res.body.memberNumber,
              announcement: res.body.announcement,
              paperNumber: 0,
              groupName: res.body.groupName,
              avatar: res.body.avatar
            });
          }
        });

  }

});

module.exports = GroupStore;