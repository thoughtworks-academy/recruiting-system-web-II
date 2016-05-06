'use strict';

var page = require('page');

var GroupAvatar = React.createClass({

  handleClick: function (){
    page('/' + this.props.group.groupHash + '/index/' + this.props.role);
  },

  render () {
      return(
        <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
          <div className="avatar"><button className="text-primary"
                                          onClick={this.handleClick} >
            {this.props.group.avatar!== '' && this.props.group.avatar !== null?
              <img src={this.props.group.avatar} />:
              <span><i className="fa fa-group" /></span>
            }
          </button></div>
          <div className="avatar-name"><button className="text-primary"
                                               onClick={this.handleClick} >
            {this.props.group.name}
          </button></div>
        </div>
      );
    }
});

module.exports = GroupAvatar;