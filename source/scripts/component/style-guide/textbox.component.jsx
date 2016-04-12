'use strict';

var TextBox = React.createClass({
  render() {
    return (
        <textarea className="textarea"
                  value={this.props.content}
                  readOnly={this.props.readonly ? 'readonly' : ''}/>
    );
  }
});

module.exports = TextBox;