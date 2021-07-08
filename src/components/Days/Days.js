import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import moment from "moment";
import axios from "axios";

import NewEventModal from "../NewEventModal/NewEventModal";
import EditModal from "../EditModal/EditModal";
import WeekDays from "../WeekDays/WeekDays";

import "./Days.css";

class Days extends Component {
  state = {
    showModal: false,
    showModalEdit: false,
    clickedDay: "",
    currentMoment: moment(),
    eventName: "",
    description: "",
    date: "",
    calendar: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/calendar",
        {
          eventName: this.state.eventName,
          description: this.state.description,
          date: this.state.clickedDay,
        }
      );
      this.componentDidMount();
      this.handleCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/calendar"
      );

      this.setState({ calendar: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  handleFilter = (x) => {
    return this.state.calendar.filter((day) => {
      return day.date === x;
    });
  };

  // new event modal

  handleOpenModal = (event) => {
    this.setState({ showModal: true, clickedDay: event.target.id });
  };

  handleCloseModal = (event) => {
    this.setState({ showModal: false });
  };

  //edit modal

  handleOpenModalEdit = (event) => {
    this.setState({ showModalEdit: true, clickedDay: event.target.id });
  };

  handleCloseModalEdit = (event) => {
    this.setState({ showModalEdit: false, showModal: false });
  };

  handleChangeMonth = (event) => {
    this.setState({
      currentMonth: this.state.currentMoment.add(
        Number(event.target.id),
        "month"
      ),
    });
    this.props.handleChangeNav(this.state.currentMoment);
  };

  render() {
    let startDay = this.state.currentMoment
      .clone()
      .startOf("month")
      .startOf("week");
    let endDay = this.state.currentMoment.clone().endOf("month").endOf("week");
    let calendar = [];
    let day = startDay.clone().subtract(1, "day");

    let auxArray = [];
    let i = 0;

    while (day.isBefore(endDay, "day")) {
      if (i % 7 === 0) {
        calendar.push(auxArray);
        auxArray = [];
      }
      auxArray.push(day.add(1, "day").clone().format("YYYY-MM-DD"));
      i++;
    }

    if (auxArray.length > 0) {
      calendar.push(auxArray);
    }

    return (
      <div>
        <div className="d-flex justify-content-between m-0">
          <button
            className="btn btn-light border border-2 border-dark my-1 "
            id="-1"
            onClick={this.handleChangeMonth}
          >
            <i className="fas fa-chevron-left"></i> Previous month
          </button>
          <button
            className="btn btn-light border border-2 border-dark my-1"
            id="1"
            onClick={this.handleChangeMonth}
          >
            Next month <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div>
          {calendar.map((day) => {
            return (
              <WeekDays
                week={day}
                handleOpenModal={this.handleOpenModal}
                handleFilter={this.handleFilter}
                handleOpenModalEdit={this.handleOpenModalEdit}
              />
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

        <EditModal
          showModalEdit={this.state.showModalEdit}
          handleCloseModalEdit={this.handleCloseModalEdit}
          handleOpenModalEdit={this.handleOpenModalEdit}
          clickedDay={this.state.clickedDay}
          eventName={this.state.eventName}
          description={this.state.description}
          handleSubmit={this.handleSubmit}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default Days;
