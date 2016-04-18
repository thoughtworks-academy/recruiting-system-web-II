'use strict';

var AddPaper = React.createClass({

  handleClick: function(){
    this.props.createPaper();
  },

  render: function() {
    return (
      <div className="paper-button col-xs-12 text-center" >
        <button onClick={this.handleClick}>
          <i className="fa fa-plus text-primary fa-5x"/>
        </button>
      </div>
    )
  }
});

module.exports = AddPaper;