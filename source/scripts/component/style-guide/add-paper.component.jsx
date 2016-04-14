'use strict';

var AddPaper = React.createClass({
  addPaper: function() {
    this.pros.addPaper();
  },
  render: function() {
    return (
      <div className="paper-button col-xs-12 text-center">
        <i className="fa fa-plus text-primary fa-5x"></i>
      </div>
    )
  }
});

module.exports = AddPaper;