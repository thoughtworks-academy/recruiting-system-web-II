'use strict';

var GroupEvent = React.createClass({

  render() {

    var eventList = this.props.events.map((event, index) => {
      return(
        <div className="col-md-12 col-sm-12 col-xs-12 group-event" key={index}>
          <h5>
            <div className="user-avatar">
              <img src={event.avatar}/>
            </div>
            <div className="event-info">
                <em>{event.type === 'admin'? '管理员:' : ''}</em>{event.name}
              <small>{event.time}</small>
              <span>{event.action}</span>
            </div>
          </h5>
          { event.content !== '' ?
            <p className="col-md-2 col-sm-4 col-xs-6">
              <a href="#">{event.content}</a>
            </p> :
            null
          }
          <hr className="col-md-12 col-sm-12 col-xs-12"/>
        </div>
      );
    });

    return (
      <div>
        {eventList}
      </div>
    );
  }
});

module.exports = GroupEvent;
