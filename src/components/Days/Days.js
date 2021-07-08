import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";
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
    type: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("https://ironrest.herokuapp.com/calendar", {
        eventName: this.state.eventName,
        description: this.state.description,
        date: this.state.clickedDay,
        type: this.state.type,
      });
      this.componentDidMount();
      this.handleCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    this.handleDraw();
  };

  handleDraw = async () => {
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
        <div className="row">
          <nav className="navbar navbar-dark font mb-3">
            <Link to="/" className="navbar-brand ps-5">
              {"MY CALENDAR"}
            </Link>
            <Link to="/" className="navbar-brand me-5">
              <button
                className="btn my-1 ms-1"
                id="-1"
                onClick={this.handleChangeMonth}
              >
                <i
                  id="-1"
                  onClick={this.handleChangeMonth}
                  className="fas fa-chevron-left"
                ></i>
              </button>
              <span className="font">
                {this.props.startDay.format("MMMM YYYY")}
              </span>
              <button
                className="btn ms-1 my-1"
                id="1"
                onClick={this.handleChangeMonth}
              >
                <i
                  id="1"
                  onClick={this.handleChangeMonth}
                  className="fas fa-chevron-right"
                ></i>
              </button>
            </Link>
          </nav>
        </div>

        <div className="d-flex justify-content-evenly align m-0 week-days">
          <p>SUNDAY</p>
          <p>MONDAY</p>
          <p>TUESDAY</p>
          <p>WEDNESDAY</p>
          <p>THURSDAY</p>
          <p>FRIDAY</p>
          <p>SATURDAY</p>
        </div>
        <div className="container p-0">
          {calendar.map((day) => {
            return (
              <WeekDays
                key={day}
                week={day}
                handleOpenModal={this.handleOpenModal}
                handleFilter={this.handleFilter}
                handleOpenModalEdit={this.handleOpenModalEdit}
                currentMoment={this.state.currentMoment}
                type={this.state.type}
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
          type={this.state.type}
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
          handleDraw={this.handleDraw}
        />
      </div>
    );
  }
}

export default Days;
