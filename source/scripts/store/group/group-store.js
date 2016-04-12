'use strict';

var Reflux = require('reflux');
var GroupActions = require('../../actions/group/group-actions');
var superAgent = require('superagent');
var errorHandler = require('../../../../tools/error-handler.jsx');

var GroupStore = Reflux.createStore({
  listenables: [GroupActions],

  onLoadIndex: function () {
    console.log('ddddddddddd');
    this.trigger({
      announcement: '公告',
      paperNumber: 8,
      memberNumber: 35,
      groupEvents: [
        {
          avatar: require('../../../images/1.pic_hd.jpg'),
          name: '某某某',
          type: 'user',
          time: '04/01/2016 10:22',
          action: '发布了一条评论',
          content: '这道题好难这道题好难这道题好难这道题好难这道题好难这道题好难这道题好难这道题好难'
        },
        {
          avatar: require('../../../images/1.pic_hd.jpg'),
          name: '某某某',
          type: 'admin',
          time: '04/01/2016 10:22',
          action: '增加了一张新试卷 《面向对象 Step By Step》',
          content: ''
        },
        {
          avatar: require('../../../images/1.pic_hd.jpg'),
          name: '某某某',
          type: 'user',
          time: '04/01/2016 10:22',
          action: '加入了群组',
          content: ''
        },
        {
          avatar: require('../../../images/1.pic_hd.jpg'),
          name: '某某某',
          type: 'user',
          time: '04/01/2016 10:22',
          action: '完成了试卷《集合运算》',
          content: ''
        }
      ]
    })
  }

});

module.exports = GroupStore;