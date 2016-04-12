'use strict';

var Reflux = require('reflux');
var GroupActions = require('../../actions/group/group-actions');
var superAgent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var GroupStore = Reflux.createStore({
  listenables: [GroupActions],

  onLoadIndex: function (hash) {
    superAgent.get('/api/group/index')
        .set('Content-Type', 'application/json')
        .query({hash: hash})
    this.trigger();
  }

});

module.exports = GroupStore;