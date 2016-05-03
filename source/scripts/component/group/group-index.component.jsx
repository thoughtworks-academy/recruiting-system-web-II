'use strict';

var GroupTitle = require("../style-guide/group-title.component.jsx");
var GroupEvent = require("../style-guide/group-event.component.jsx");
var GroupAvatar = require("../style-guide/group-avatar.component.jsx");
var TextBox = require("../style-guide/textbox.component.jsx");
var GroupActions = require('../../actions/group/group-actions');
var GroupStore = require('../../store/group/group-store');
var Reflux = require('reflux');

var GroupIndex = React.createClass({
  mixins: [Reflux.connect(GroupStore)],

  getInitialState: function () {
    return {
      announcement: '',
      paperNumber: 0,
      memberNumber: 0,
      groupEvents: [],
      isAnnouncePublished: true,
      group: {
        name: '',
        avatar: '',
        groupHash: this.props.groupHash
      }
    }
  },

  componentWillMount: function () {
    GroupActions.loadIndex(this.props.groupHash);
  },

  render() {
    return (
        <div>
          <div className="col-md-9">
            <GroupTitle titleName="群组公告"/>
            <TextBox content={this.state.isAnnouncePublished ? this.state.announcement : ''}
                     readonly={true}/>
            <GroupTitle titleName="群组事件"/>
            <GroupEvent events={this.state.groupEvents}/>
          </div>
          <div className="col-md-3 group-icon">
            <GroupAvatar group={this.state.group}
                         />

            <p>试卷:{this.state.paperNumber}张</p>
            <p>人数:{this.state.memberNumber}人</p>
          </div>
        </div>
    );
  }

});

module.exports = GroupIndex;