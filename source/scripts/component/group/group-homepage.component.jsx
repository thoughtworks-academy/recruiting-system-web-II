'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
var GroupAvatar = require('../style-guide/group-avatar.component.jsx');
var Paper = require('../style-guide/paper.component.jsx');
var AddGroup = require('../style-guide/add-group.component.jsx');
var GroupAction = require('../../actions/group/group-actions.js');
var GroupStore = require('../../store/group/group-store.js');
var Reflux = require('reflux');

var GroupHomepage = React.createClass({
  mixins: [Reflux.connect(GroupStore)],

  getInitialState(){
    return {
      groups: [],
      role: this.props.role || '2',
      papers: [
        {
          paperName: 'pos 无尽版',
          isMarked: true,
          isPublished: true,
          sectionNumber: 13,
          publishedNumber: 6,
          role: '2',
          isFinished: true
        },
        {
          paperName: 'pos 真·无尽版',
          isMarked: false,
          isPublished: false,
          sectionNumber: 10,
          publishedNumber: 1,
          role: '1',
          isFinished: false
        }
      ]
    }
  },
  componentDidMount: function () {
    GroupAction.loadGroup();
  },

  createGroup: function () {
    GroupAction.createGroup();
  },

  render(){
    var groupList = this.state.groups.map((group, index) => {
      return (
          <div className="col-md-3 col-sm-4 col-xs-6" key={index}>
            <GroupAvatar groupName={group.name}
                         groupAvatar={group.avatar}
                         groupHash={group.groupHash}/>
          </div>
      )
    });

    var paperList = this.state.papers.map((paper, index) => {
      return (
          <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
            <Paper item={paper}/>
          </div>
      )
    });
    return (
        <div>
          <GroupTitle titleName="我的群组"/>
          <div className="col-md-12 col-sm-12 col-xs-12">
            {groupList}
            {this.state.role === '1' ? <AddGroup createGroup={this.createGroup}/> : null}
          </div>

          <GroupTitle titleName="我关注的试卷"/>
          {paperList}
        </div>
    )
  }
});

module.exports = GroupHomepage;