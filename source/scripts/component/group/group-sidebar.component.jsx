'use strict';

var ListGroup = require('../style-guide/list-group.component.jsx');

var GroupSidebar = React.createClass({

  getInitialState: function() {
    return ({
      title: '个人中心',
      list: [
        {name: '群组首页',action: 'index'},
        {name: '群组试卷',action: 'paper'},
        {name: '群组讨论',action: 'discussion'},
        {name: '群组管理',action: 'manage'}
      ]
    })
  },

  render() {
    return (
        <div className="col-md-3">
          <ListGroup title={this.state.title}
                     list={this.state.list}
                     action={this.props.action}
                     groupId={this.props.groupId} />
        </div>
    );
  }
});

module.exports = GroupSidebar;