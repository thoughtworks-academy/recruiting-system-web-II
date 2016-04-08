'use strict';

var InviteLink = React.createClass({
  getInitialState(){
    return {
      inviteLink: 'https://github.com/wengjiaojiao'
    }
  },
  render() {
    return (
      <div className="invite-link">
        <p className="col-md-3 col-sm-2 col-xs-4 text-right">邀请链接:</p>
        <div className="col-md-9 col-sm-6 col-xs-8">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.inviteLink} readOnly />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">复制</button>
              </span>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InviteLink;
