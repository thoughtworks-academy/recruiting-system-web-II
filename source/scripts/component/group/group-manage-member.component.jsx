'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');

var ManageMember = React.createClass({

  getInitialState: function (){
    return {
      tableContent: this.props.members,
      isBanned: false,
      isDeleted: false
    }
  },

  render () {
    var tableBody = this.state.tableContent.map((item, index) => {
      return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            {this.state.isDeleted ? <td>已删除</td> :
             <td>
              {this.state.isBanned ? '已禁言' : <a href="#">禁言</a>}
              <a href="#">删除</a>
             </td>
            }
          </tr>
      )
    });
    return (
        <div>
          <GroupTitle titleName='群成员列表'/>
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