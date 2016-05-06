'use strict';

var AddSection = React.createClass({
  render: function() {
    return (
      <div className="dashboard-icon col-md-12 col-sm-12 col-xs-12">
        <div className="icon col-md-12 col-sm-12 col-xs-12">
          <div className="icon-img icon-add" >
            <button onClick={this.props.addSection}><span className="fa fa-plus"/></button>
          </div>
        </div>
      </div>

    )
  }
});

module.exports = AddSection;