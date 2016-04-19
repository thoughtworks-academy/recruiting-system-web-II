'use strict';
var UploadAvatar = require('../style-guide/upload-avatar.component.jsx');
var InviteLink = require('../style-guide/invite-link.component.jsx');
var TextBox = require('../style-guide/textbox.component.jsx');
var Switch = require('react-bootstrap-switch');
var page = require('page');
require('../../../../node_modules/react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css');
require('../../../../node_modules/react-bootstrap-switch/dist/js/react-bootstrap-switch.min.js');

var ManageIndex = React.createClass({
  getInitialState: function () {
    return {
      isAnnouncePublished: true,
      isLinkActivated: true,
      announcement: '',
      groupHash: this.props.groupHash
    }
  },

  switchValue: function (elem, value) {
    if (elem.props.name === 'publish') {
      this.setState({
        isAnnouncePublished: value
      })
    }

    if (elem.props.name === 'activate') {
      this.setState({
        isLinkActivated: value
      })
    }
  },

  textboxValue: function (content) {
    this.setState({
      announcement: content
    });
  },

  submitGroupInfo: function () {
    var data = {
      name: this.refs.groupName.value,
      avatar: '',
      isAnnouncePublished: this.state.isAnnouncePublished,
      announcement: this.state.announcement
    };
    this.props.submitInfo(data, this.state.groupHash);
  },

  render () {
    return (
        <div className="basic-setting">
          <div className="basic-info col-md-12 col-sm-12 col-xs-12">
            <p className="col-md-2">
              群组名称:
            </p>
            <div className="col-md-6">
              <input className="form-control" name="groupName" type="text" ref="groupName"/>
            </div>
            <p className="col-md-2">
              当前人数:
            </p>
            <div className="col-md-2">
              <input className="form-control" name="memberNumber" readOnly type="text"/>
            </div>
          </div>
          <div className="basic-avatar col-md-12 col-sm-12 col-xs-12">
            <p className="col-md-2">
              群组头像:
            </p>
            <div className="col-md-10">
              <UploadAvatar />
            </div>
          </div>
          <div className="invite-link col-md-12 col-sm-12 col-xs-12">
            <div className="col-md-8"><InviteLink /></div>
            <div className="col-md-4 ">
              <p className="col-md-8 ">
                是否启用:
              </p>
              <div className="col-md-4">
                <Switch size="mini" name="activate" onChange={this.switchValue}/>
              </div>
            </div>
          </div>
          <hr className="col-md-12 col-sm-12 col-xs-12"/>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="col-md-2">
              公告通知:
            </p>
            <div className="col-md-4 col-md-offset-6">
              <p className="col-md-8">
                是否发布:
              </p>
              <div className="col-md-4">
                <Switch size="mini" name="publish" onChange={this.switchValue}/>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <TextBox onChange={this.textboxValue} content={this.state.announcement}/>
          </div>
          <div className="save-button col-md-12 col-sm-12 col-xs-12">
            <button className="btn btn-default" onClick={this.submitGroupInfo}> 保存</button>
          </div>
        </div>

    );
  }

});

module.exports = ManageIndex;