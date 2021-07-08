import moment from "moment";
import { Link } from "react-router-dom";

function WeekDays(props) {
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
            className={moment(day).isSame(props.currentMoment,"month")? "col days-border":"col days-border gray"}
          >
            <div>{day.slice(-2)}</div>
            <div>
              {props.handleFilter(day).map((eventDay) => {
                let randomR = Math.floor(Math.random() * 255);
                let randomG = Math.floor(Math.random() * 255);
                let randomB = Math.floor(Math.random() * 255);
   
                return (
        
                 
                  <button
                    id={eventDay._id}                 
                    style={{
                      backgroundColor: `rgb(${randomR},${randomG},${randomB})`,
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
