'use strict';

var CustomizeTabs = require('../style-guide/customizeTabs.component.jsx');
var ManageIndex = require('./group-manage-index.component.jsx');
var ManagePaper = require('./group-manage-paper.component.jsx');
var MangeMember = require('./group-manage-member.component.jsx');
var MangeVerify = require('./group-manage-verify.component.jsx');
var MangeDiscussion = require('./group-manage-discussion.component.jsx');
var GroupAction = require('../../actions/group/group-actions.js');
var GroupStore = require('../../store/group/group-store');
var Reflux = require('reflux');

var GroupManage = React.createClass ({
  mixins: [Reflux.connect(GroupStore)],

  getInitialState: function (){
    return {
      tabNames: ['基本设置', '试卷管理', '成员管理', '入群审核', '讨论管理'],
      groupName: this.props.groupName || '未命名',
      papers: [
        {
          id:1,
          paperName:'pos 无尽版',
          isMarked: true,
          isPublished: true,
          sectionNumber: 13,
          publishedNumber:6,
          role: '2',
          isFinished: true
        },
        {
          id:2,
          paperName:'pos 真·无尽版',
          isMarked: false,
          isPublished: false,
          sectionNumber: 10,
          publishedNumber:1,
          role: '1',
          isFinished: false
        },
        {
          id:3,
          paperName:'pos 真·无尽版',
          isMarked: false,
          isPublished: false,
          sectionNumber: 10,
          publishedNumber:1,
          role: '1',
          isFinished: false
        }
      ],
      members: [
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        },
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        },
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        }
      ],
      preMembers: [
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        },
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        },
        {
          name: '张三',
          phone: '13111113333',
          email: 'wwww@qq.com'
        }
      ],
      subjects: [
        {
          author: '张三',
          content: '法师打发司盛世嫡妃... ... '
        },
        {
          author: '张三',
          content: '法师打发司盛世嫡妃... ... '
        },{
          author: '张三',
          content: '法师打发司盛世嫡妃... ... '
        }
      ]
    }
  },

  render() {
    return (
        <CustomizeTabs tabNames={this.state.tabNames}>
          <ManageIndex groupHash={this.props.groupHash} submitInfo={GroupAction.submitInfo}/>
          <ManagePaper groupName={this.state.groupName} papers={this.state.papers} role={this.props.role}/>
          <MangeMember members={this.state.members} />
          <MangeVerify preMembers={this.state.preMembers} />
          <MangeDiscussion subjects={this.state.subjects} />
        </CustomizeTabs>

    );
  }
});

module.exports = GroupManage;