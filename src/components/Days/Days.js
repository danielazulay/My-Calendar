import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import moment from "moment";
import NewEventModal from "../NewEventModal/NewEventModal";
import axios from 'axios'


class Days extends Component {
  state = {
    showModal: false,
    clickedDay: "",
    currentMoment: moment(),
    eventName:'',
    description:'',
    date:''
  };

  handleChange=(event)=>{

    this.setState({[event.target.name]:event.target.value})

    console.log(event.target.value)
  }

   handleSubmit = async(event)=>{
     event.preventDefault()
     try{
      const response = await axios.post('https://ironrest.herokuapp.com/calendar',
      {eventName:this.state.eventName,
        description: this.state.description,
        date:this.state.clickedDay})







     }catch(err){

      console.log(err)
     }
  } 

  handleOpenModal = (event) => {
    this.setState({ showModal: true, clickedDay: event.target.id });
  };

  handleCloseModal = (event) => {
    this.setState({ showModal: false });
  };

  handleChangeMonth = (event) => {
    this.setState({
      currentMonth: this.state.currentMoment.add(
        Number(event.target.id),
        "month"
      ),
    });
  };

  render() {
    let startDay = this.state.currentMoment
      .clone()
      .startOf("month")
      .startOf("week");
    let endDay = this.state.currentMoment.clone().endOf("month").endOf("week");
    let calendar = [];
    let day = startDay.clone().subtract(1, "day");

    while (day.isBefore(endDay, "day")) {
      calendar.push(day.add(1, "day").clone().format("YYYY-MM-DD"));
    }

    return (
      <div>
        <div className="container">
          <button id="-1" onClick={this.handleChangeMonth}>
            Previous month
          </button>
          <button id="1" onClick={this.handleChangeMonth}>
            Next month
          </button>
          <div className="row row-cols-6">
            {calendar.map((day) => {
              return (
                <div
                  key={day}
                  id={day}
                  className="col wd"
                  role="button"
                  onClick={this.handleOpenModal}
                >
                  {day.slice(-2)}
                </div>
              );
            })}
          </div>
          <NewEventModal
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            handleOpenModal={this.handleOpenModal}
            handleChange={this.handleChange}
            clickedDay={this.state.clickedDay}
            eventName={this.state.eventName}
            description={this.state.description}
            handleSubmit={this.handleSubmit}
            date={this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default Days;
