'use strict';

var GroupTitle = React.createClass({
  render() {
    return (
      <div className="group-title">
        <h4>{this.props.titleName}</h4>
        <hr/>
      </div>
    );
  }
});

module.exports = GroupTitle;
