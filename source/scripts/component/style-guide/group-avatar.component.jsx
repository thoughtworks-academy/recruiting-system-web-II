'use strict';

var page = require('page');

var GroupAvatar = React.createClass({

  handleClick: function (){
    page('/' + this.props.groupId);
  },

  render () {
      return(
        <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
          <div className="avatar"><button className="text-primary"
                                          onClick={this.handleClick} >
            {this.props.groupAvatar !== '' && this.props.groupAvatar !== null?
              <img src={this.props.groupAvatar} />:
              <span><i className="fa fa-group" /></span>
            }
          </button></div>
          <div className="avatar-name"><button className="text-primary"
                                               onClick={this.handleClick} >
            {this.props.groupName}
          </button></div>
        </div>
      );
    }
});

module.exports = GroupAvatar;