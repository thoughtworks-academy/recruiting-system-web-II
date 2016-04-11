'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
var Paper = require('../style-guide/paper.component.jsx');
var AddPaper = require('../style-guide/add-paper.component.jsx');

var ManagePaper = React.createClass({

  getInitialState: function () {
    return {
      groupName: this.props.groupName || '未命名',
      papers: this.props.papers || []
    }
  },

  render () {
    var paperList = this.state.papers.map((paper, index) => {
      return (
          <Paper item={paper} key={index}/>
      )
    });
    return (
        <div>
          <GroupTitle titleName={this.state.groupName}/>
          <div>
            {paperList}
            <AddPaper />
          </div>
        </div>
    );
  }
});

module.exports = ManagePaper;