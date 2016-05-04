'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
var Paper = require('../style-guide/paper.component.jsx');
var AddPaper = require('../style-guide/add-paper.component.jsx');
var OperatePaper = require('./group-operate-paper.component.jsx');
var AddSection = require('./group-add-section.component.jsx');
var GroupAction = require('../../actions/group/group-actions.js');
var GroupStore = require('../../store/group/group-store.js');
var Reflux = require('reflux');

var ManagePaper = React.createClass({
  mixins: [Reflux.connect(GroupStore)],

  getInitialState: function () {
    return {
      groupName: this.props.groupName || '未命名',
      papers: this.props.papers || [],
      isDisplayed: 'paperManage'
    }
  },

  createPaper: function () {
    GroupAction.setPaperId(0);
    this.setState({
      isDisplayed: 'operatePaper'
    });
  },

  editPaper: function (id) {
    GroupAction.setPaperId(id);
    this.setState({
      isDisplayed:'operatePaper'
    });
    GroupAction.loadSection(id);
  },

  paperManage: function() {
    this.setState({
      isDisplayed: 'paperManage'
    });
  },

  addSection: function (){
    this.setState({
      isDisplayed: 'addSection'
    });
  },

  render () {
    var paperList = this.state.papers.map((paper, index) => {
      return (
        <Paper item={paper} key={index} editPaper={this.editPaper}/>
      )
    });
    return (
      <div>
        <div className={this.state.isDisplayed === 'paperManage' ? '' : 'hide'}>
          <GroupTitle titleName={this.state.groupName}/>
          {paperList}
          <AddPaper createPaper={this.createPaper}/>
        </div>
        <div className={this.state.isDisplayed === 'operatePaper' ? '' : 'hide'}>
          <OperatePaper addSection={this.addSection} paperManage={this.paperManage}/>
        </div>
        <div className={this.state.isDisplayed === 'addSection' ? '' : 'hide'}>
          <AddSection paperManage={this.paperManage} />
        </div>
      </div>
    );
  }
});

module.exports = ManagePaper;