'use strict';

var CustomizeTabs = require('../style-guide/customizeTabs.component.jsx');
var ManageIndex = require('./group-manage-index.component.jsx');
var tabNames = ['基本设置', '试卷管理', '成员管理', '讨论管理'];
var GroupManage = React.createClass ({

  render() {
    return (
        <CustomizeTabs tabNames={tabNames}>
          <ManageIndex />
          <ManageIndex />
        </CustomizeTabs>

    );
  }
});

module.exports = GroupManage;