'use strict';

var Reflux = require('reflux');
var GroupActions = require('../../actions/group/group-actions');
var superagent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');
var constant = require('../../../../mixin/constant');
var page = require('page');

var GroupStore = Reflux.createStore({
  listenables: [GroupActions],

  onLoadIndex: function (groupHash) {

    superagent.get('/api/group/info/' + groupHash)
      .set('Content-Type', 'application/json')
      .use(errorHandler)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.trigger({
            memberNumber: res.body.memberNumber,
            announcement: res.body.announcement || '',
            paperNumber: 0,
            group:{
              name: res.body.name,
              avatar: res.body.avatar,
              groupHash: groupHash
            }
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
              role: res.body.role || '2'
            });
          } else if (res.body.status === constant.httpCode.NOT_FOUND) {
            this.trigger({
              groups: [],
              role: res.body.role || '2'
            });
          }
        });
  },

  onCreateGroup: function () {
    superagent.post('/api/group')

        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            page('/' + res.body.groupHash + '/manage');
          }
        })
  },


  onSubmitInfo: function (data, groupHash) {
    var url = '/api/group/' + groupHash;

    superagent.put(url)
        .set('Content-Type', 'application/json')
        .send(data)
        .use(errorHandler)
        .end((err, res) => {
          if (res.body.status === constant.httpCode.CREATED ||
              res.body.status === constant.httpCode.OK) {
            page('/group');
          }
        });
  },

  onCreatePaper: function (paperName, groupHash) {

    var url = '/api/group/' + groupHash + '/paper';

    superagent.post(url)
        .send({paperName: paperName})
        .set('Content-Type', 'application/json')
        .use(errorHandler)
        .end((err, res) => {
          this.trigger({
            paperId: res.body.paperId,
            sections: []
          });
        });
  },
  onAddPaper: function () {
    this.trigger({
      paperId: null
    })
  },

  onSetPaperId: function(id) {
    this.trigger({
      paperId: id
    });
  },
  onLoadSection: function(id) {
    var url = '/api/group/paper/' + id;

    superagent.get(url)
    .set('Content-Type', 'application/json')
    .use(errorHandler)
    .end((err,res) => {
      if(res.body.status === constant.httpCode.NOT_FOUND) {
        this.trigger({
          sections: []
        })
      } else if (res.body.status === constant.httpCode.OK) {
        this.trigger({
          sections: res.body.sections
        });
      } else {
        return ;
      }

    });
  }
});

module.exports = GroupStore;