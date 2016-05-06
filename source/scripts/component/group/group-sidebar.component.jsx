'use strict';

var ListGroup = require('../style-guide/list-group.component.jsx');

var GroupSidebar = React.createClass({

  getInitialState: function() {
    return ({
      title: '群组概况',
      list: [
        {name: '群组首页',action: 'index'},
        {name: '群组试卷',action: 'paper'},
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
                     groupHash={this.props.groupHash}
                     role={this.props.role} />
        </div>
    );
  }
});

module.exports = GroupSidebar;