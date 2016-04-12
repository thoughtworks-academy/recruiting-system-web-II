'use strict';

var GroupAvatar = React.createClass({

  render () {
      return(
        <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
          <div className="avatar"><a href={"/group/" + this.props.groupHash + "/index"}>
            {this.props.groupAvatar !== '' ?
              <img src={this.props.groupAvatar} />:
              <span><i className="fa fa-group" /></span>
            }
          </a></div>
          <div className="avatar-name"><a href={"/group/" + this.props.groupHash + "/index"}>
            {this.props.groupName}
          </a></div>
        </div>
      );
    }
});

module.exports = GroupAvatar;