'use strict';

var CustomizeTabs = require('../style-guide/customizeTabs.component.jsx');
var ManageIndex = require('./group-manage-index.component.jsx');
var ManagePaper = require('./group-manage-paper.component.jsx');
var MangeMember = require('./group-manage-member.component.jsx');
var MangeVerify = require('./group-manage-verify.component.jsx');

var GroupManage = React.createClass ({

  getInitialState: function (){
    return {
      tabNames: ['基本设置', '试卷管理', '成员管理', '入群审核', '讨论管理'],
      groupName: this.props.groupName || '未命名',
      papers: [
        {
          paperName:'pos 无尽版',
          isMarked: true,
          isPublished: true,
          sectionNumber: 13,
          publishedNumber:6,
          role: '2',
          isFinished: true
        },
        {
          paperName:'pos 真·无尽版',
          isMarked: false,
          isPublished: false,
          sectionNumber: 10,
          publishedNumber:1,
          role: '1',
          isFinished: false
        },
        {
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
      ]
    }
  },

  render() {
    return (
        <CustomizeTabs tabNames={this.state.tabNames}>
          <ManageIndex />
          <ManagePaper groupName={this.state.groupName} papers={this.state.papers} />
          <MangeMember members={this.state.members}/>
          <MangeVerify members={this.state.members}/>
        </CustomizeTabs>

    );
  }
});

module.exports = GroupManage;