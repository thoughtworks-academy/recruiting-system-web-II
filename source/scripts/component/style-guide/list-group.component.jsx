'use strict';
var page = require('page');

var ListGroup = React.createClass({

  handleClick: function (action) {
    page('/' + this.props.groupHash + '/' + action);
  },

  render() {

    var listContent = this.props.list.map((item, index) => {
      var classStr = "list-group-item " + (this.props.action === item.action ? 'select': '');
      return (
        <button className={classStr} key={index} onClick={this.handleClick.bind(null, item.action)}>
          <div className="row">
            <div className="h4 text-center">{item.name}</div>
          </div>
        </button>
      )
    });

    return (
      <div>
        <div className="list-group">
          <div className="list-group-item active">
            <div className="row">
              <div className="h4 text-center">{this.props.title}</div>
            </div>
          </div>
          {listContent}
        </div>
      </div>
    );
  }
});
module.exports = ListGroup;