'use strict';

var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

var CustomizeTabs = React.createClass({

  getInitialState: function () {
    return {
      tabNames: this.props.tabNames
    }
  },

  render () {
    var tabNames = this.state.tabNames;
    var tabHtml = tabNames.map((item, idx) => {
      return <Tab key={idx} eventKey={idx} title={item}>{this.props.children[idx]}</Tab>
    });
    return (
        <div className="customizeTabs col-md-9 col-sm-9 col-xs-12">
          <div className="content">
            <Tabs defaultActiveKey={0} animation={false} getShowStatus={true} ref="tabs">
              {tabHtml}
            </Tabs>
          </div>
        </div>
    );
  }

});

module.exports = CustomizeTabs;