'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');

var ManageMember = React.createClass({

  getInitialState: function () {
    return {
      tableContent: this.props.members,
      isVerified: false,
      isIgnored: false
    }
  },

  render () {
    var tableBody = this.state.tableContent.map((item, index) => {
      return (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            {this.state.isVerified || this.state.isIgnored ?
                (this.state.isVerified ? <td>已处理</td> : <td>已通过</td>) :
                <td><a href="#">通过</a><a href="#">忽略</a></td>
            }
          </tr>
      )
    });
    return (
        <div>
          <GroupTitle titleName='待审核列表'/>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>No.</th>
              <th>姓名</th>
              <th>电话</th>
              <th>邮箱</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {tableBody}
            </tbody>
          </table>
        </div>
    );
  }

});

module.exports = ManageMember;