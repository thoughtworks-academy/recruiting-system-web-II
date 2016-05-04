'use strict';

var AddSection = React.createClass({
  render(){
    return (
        <div>
          <div>
            <ol className="breadcrumb">
              <li><a className="paper-manage" href="javascript:void(0)" onClick={this.props.paperManage} >试卷管理</a></li>
              <li><a className="paper-manage" href="javascript:void(0)" onClick={this.props.editPaper} > {this.props.id ? "编辑试卷" : "添加试卷"}</a></li>
              <li className="active">添加试卷</li>
            </ol>
          </div>
        </div>
    );
  }
});

module.exports = AddSection;