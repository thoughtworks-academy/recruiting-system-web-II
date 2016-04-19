'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
var Paper = require('../style-guide/paper.component.jsx');
var AddPaper = require('../style-guide/add-paper.component.jsx');
var OperatePaper = require('./group-operate-paper.component.jsx');

var ManagePaper = React.createClass({

  getInitialState: function () {
    return {
      groupName: this.props.groupName || '未命名',
      papers: this.props.papers || [],
      isDisplayed: true
    }
  },

  createPaper: function () {
    this.setState({
      isDisplayed:false
    });
  },

  paperManage: function() {
    this.setState({
      isDisplayed: true
    });
  },

  render () {
    var paperList = this.state.papers.map((paper, index) => {
      return (
        <Paper item={paper} key={index}/>
      )
    });
    return (
      <div>
        <div className={this.state.isDisplayed ? '' : 'hide'}>
          <GroupTitle titleName={this.state.groupName}/>
          {paperList}
          <AddPaper createPaper={this.createPaper}/>
        </div>
        <div className={this.state.isDisplayed ? 'hide' : ''}>
          <OperatePaper paperManage={this.paperManage}/>
        </div>
      </div>
    );
  }
});

module.exports = ManagePaper;