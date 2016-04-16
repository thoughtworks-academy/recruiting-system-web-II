'use strict';

var TextBox = React.createClass({

  handleChange: function (evt){
    var content = evt.target.value.trim();
    this.props.onChange(content);
  },

  render() {
    return (
        <textarea className="textarea"
                  onChange={this.handleChange}
                  value={this.props.content}
                  readOnly={this.props.readonly ? 'readonly' : ''}/>
    );
  }
});

module.exports = TextBox;