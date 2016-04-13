'use strict';

var AddGroup = React.createClass({

  handleClick: function (){
    this.props.createGroup();
  },

  render () {
    return (
        <div>
          <div className="col-md-3 col-sm-4 col-xs-6 text-center">
            <div className="avatar"><button onClick={this.handleClick} >
              <span><i className="fa fa-plus text-success" /></span>
            </button></div>
            <div className="avatar-name"><button className="text-primary"
                                                 onClick={this.handleClick} >
              添加群组
            </button></div>
          </div>
        </div>
    );
  }
});

module.exports = AddGroup;