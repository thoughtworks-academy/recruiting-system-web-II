'use strict';

var AddSection = require('../style-guide/add-section.component.jsx');
var validate = require('validate.js');
var GroupAction = require('../../actions/group/group-actions.js');
var GroupStore = require('../../store/group/group-store.js');
var Reflux = require('reflux');

var constraint = {
  paperName: {
    presence: {message: '^请输入试卷名称'},
    length: {
      maximum: 32,
      message: '^试卷名称过长'
    }
  }
};

function getError(validateInfo, field) {
  if (validateInfo && validateInfo[field] && validateInfo[field].length > 0) {
    return validateInfo[field][0];
  }
  return '';
}

var SectionPage = React.createClass({
  mixins: [Reflux.connect(GroupStore)],

  getInitialState: function() {
    return {
      paperNameError: '',
      paperId: 0
    }
  },
  sendPaper: function() {
    var valObj = {};
    var stateObj = {};

    valObj.paperName = this.refs.paperName.value;
    stateObj.paperNameError = getError(validate(valObj, constraint), 'paperName');

    if (stateObj.paperNameError) {
      return this.setState(stateObj);
    }

    GroupAction.operatePaper(this.refs.paperName.value);
  },
  render() {
    return(
      <div>
        <div>
          <ol className="breadcrumb">
            <li><a href="#">试卷管理</a></li>
            <li className="active">{this.props.id ? "编辑试卷": "添加试卷"}</li>
          </ol>
        </div>
        <div className="col-md-8 col-md-offset-2 paper-name">
          <div className="col-md-2">
            <label>名称:</label>
          </div>
          <div className="col-md-8">
            <input type="text" name="paperName" className="form-control" ref="paperName"/>
            <div className={'lose' + (this.state.paperNameError === '' ? ' hide' : '')}>{this.state.paperNameError}
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-default" onClick={this.sendPaper}>保存</button>
          </div>
        </div>
        <div className="edit-paper">
        </div>
        <div className="add-paper col-md-8 col-md-offset-2">
          <AddSection />
        </div>
        <div className="col-md-12 operate-paper">
          <button className="btn btn-default col-md-2 col-md-offset-1">预览</button>
          <button className="btn btn-default col-md-4 col-md-offset-1">发布所有未发布章节</button>
          <button className="btn btn-danger col-md-offset-1">封闭编辑</button>
        </div>
      </div>
    );
  }
});

module.exports = SectionPage;