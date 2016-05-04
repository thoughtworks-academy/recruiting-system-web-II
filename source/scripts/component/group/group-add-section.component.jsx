'use strict';

var AddSection = React.createClass({

  getInitialState: function (){
    return {
      homeworks: []
    };
  },

  addHomework: function (){
    var repo = this.refs.repo.value;
    var branch = this.refs.branch.value;

    console.log({repo: repo, branch: branch});
    this.state.homeworks.push({repo: repo, branch: branch});
    this.setState({homeworks: this.state.homeworks});
  },

  componentDidUpdate: function (){
    this.refs.repo.value = '';
    this.refs.branch.value = '';
  },

  render(){

    var tableBody = this.state.homeworks.map((homework, index) => {
      return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{homework.repo}</td>
            <td>{homework.branch}</td>
          </tr>
      )
    });

    return (
        <div className="section-info">
          <div className="panel-head">
            <ol className="breadcrumb">
              <li><a className="paper-manage" href="javascript:void(0)">试卷管理</a></li>
              <li><a className="paper-manage" href="javascript:void(0)"> {this.props.id ? "编辑试卷" : "添加试卷"}</a></li>
              <li className="active">添加章节</li>
            </ol>
          </div>
          <div className="col-md-12">
            <p className="col-md-2">
              名称:
            </p>
            <div className="col-md-6">
              <input className="form-control" type="text"/>
            </div>
            <p className="col-md-2">
              群组:
            </p>
            <div className="col-md-2">
              <input className="form-control" name="group" readOnly type="text"/>
            </div>
          </div>
          <div className="col-md-12">
            <table className="table table-hover">
              <thead>
              <tr>
                <th>No.</th>
                <th>题库地址</th>
                <th>分支</th>
              </tr>
              </thead>
              <tbody>
              {tableBody}
              </tbody>
            </table>
          </div>
          <div className="col-md-12">
            <p className="col-md-2">
              题库模板:
            </p>
            <div className="col-md-10">
              <input className="form-control" type="text"/>
            </div>
          </div>
          <div className="col-md-12">
            <p className="col-md-2">
              题库地址:
            </p>
            <div className="col-md-4">
              <input className="form-control" type="text" ref="repo"/>
            </div>
            <p className="col-md-2">
              分支:
            </p>
            <div className="col-md-2">
              <input className="form-control" type="text" ref="branch"/>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-small" onClick={this.addHomework}>添加</button>
            </div>
          </div>
          <div className="panel-foot">
            <button className="btn btn-primary ">完成</button>
            <button className="btn btn-default ">取消</button>
          </div>
        </div>
    );
  }
});

module.exports = AddSection;