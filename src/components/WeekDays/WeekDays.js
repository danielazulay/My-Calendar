import moment from "moment";

import "./WeekDays.css";

function WeekDays(props) {
  const colors={Task:'#f6f05e',Reminder:'#8b88e5',Work:'#da7ad7',Fun:'#6ea0f3',Travel:'#96e762'}

  return (
    <div className="row">
      {props.week.map((day) => {
        return (
          <div
            key={day}
            id={day}
            role="button"
            onClick={props.handleOpenModal}
            style={{ overflowY: "scroll" }}
            className={
              moment(day).isSame(props.currentMoment, "month")
                ? "col days-border"
                : "col days-border gray"
            }
          >
            <div>{day.slice(-2)}</div>
            <div>
              {props.handleFilter(day).map((eventDay) => {

                return (
                  <button
                    key={eventDay._id}
                    id={eventDay._id}
                    style={{
                      backgroundColor: colors[eventDay.type]
                    }}
                    className="boxlist btn m-1"
                    onClick={props.handleOpenModalEdit}
                  >
                    {eventDay.eventName}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// {calendar.map((day) => {
//     return (
//       <div
//         key={day}
//         id={day}
//         className="col days-border"
//         role="button"
//         onClick={this.handleOpenModal}
//       >
//         {day.slice(-2)}
//         <ul class="boxlist list-group">{this.handleFilter(day)}</ul>
//       </div>
//     );
//   })}

export default WeekDays;
