'use strict';

var AddSection = require('../style-guide/add-section.component.jsx');
var SectionPage = React.createClass({
  render() {
    return(
      <div>
        <ol className="breadcrumb">
          <li><a href="#">试卷管理</a></li>
          <li className="active">{this.props.currentPage}</li>
        </ol>
        <AddSection></AddSection>
      </div>
    );
  }
});

module.exports = SectionPage;