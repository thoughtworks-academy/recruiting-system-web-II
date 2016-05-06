'use strict';
var GetAccountActions = require('../../actions/reuse/get-account-actions');
var GetAccountStore = require('../../store/reuse/get-account-store');
var Reflux = require('reflux');

var GetAccount = React.createClass({
  mixins: [Reflux.connect(GetAccountStore)],

  getInitialState: function () {
    return {
      isLoged: false,
      account: ''
    };
  },

  componentDidMount: function () {
    GetAccountActions.loadAccount();
  },

  handleClick: function () {
    GetAccountActions.logout();
  },

  render: function () {
    return (
        <div className="header-right">
          <div className={this.state.isLoged ? 'hide':''}>
            <a href='/join/login' className="col-md-6 col-sm-6">登录</a>
            <a href='/join/register' className="col-md-6 col-sm-6">注册</a>
          </div>
          <div className={this.state.isLoged ? 'dropdown' : 'hide'}>
            <div className="dropdown-style" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="true">
              {this.state.account}
              <span className="caret" />
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="/user-center">个人中心</a></li>
              <li><a href="/dashboard">控制台</a></li>
              <li><a href="/group">我的群组</a></li>
              <li role="separator" className="divider" />
              <li><a href="javascript:void(0)" onClick={this.handleClick}>退出</a></li>
            </ul>
          </div>
        </div>
    );
  }
});

module.exports = GetAccount;
