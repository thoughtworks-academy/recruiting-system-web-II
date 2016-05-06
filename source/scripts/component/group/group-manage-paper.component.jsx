'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');
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
    var tableBody = this.props.papers.map((paper, index) => {
      return (
          <tr key={index}>
            <th scope="row">{paper.id}</th>
            <td>{paper.paperName}</td>
            <td className={this.props.role === '1'? '' : 'hide '}>
              <i className={"fa" + (paper.isMarked ? ' fa-star' : ' fa-star-o')} />
            </td>
            <td className={this.props.role === '1'? '' : 'hide '}>
              {paper.isPublished ? '已发布' : <button className="text-primary" >点击发布</button>}
            </td>
            <td>{paper.publishedNumber + '/' + paper.sectionNumber}</td>
            <td>
              <button className="text-warning" >编辑</button>
              <button className="text-primary" >导出成绩</button>
            </td>
            <td>
              <button className="text-success" >开始答题</button>
            </td>
          </tr>
      )
    });
    return (
      <div>
        <div className={this.state.isDisplayed === 'paperManage' ? '' : 'hide '}>
          <GroupTitle titleName={this.state.groupName}/>
          <table className="table table-hover paperList">
            <thead>
            <tr>
              <th>No.</th>
              <th>试卷名称</th>
              <th className={this.props.role === '1'? '' : 'hide '}>是否标记</th>
              <th className={this.props.role === '1'? '' : 'hide '}>发布状态</th>
              <th>已发布章节/总章节个数</th>
              <th>操作</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {tableBody}
            </tbody>
          </table>
          <button className="btn btn-default addPaper" onClick={this.handleClick}>添加试卷</button>
        </div>
        <div className={this.state.isDisplayed === 'operatePaper' ? '' : 'hide '}>
          <OperatePaper addSection={this.addSection} paperManage={this.paperManage}/>
        </div>
        <div className={this.state.isDisplayed === 'addSection' ? '' : 'hide '}>
          <AddSection paperManage={this.paperManage}/>
        </div>
      </div>
    );
  }
});

module.exports = ManagePaper;