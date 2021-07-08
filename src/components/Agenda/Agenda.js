import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Days from "../Days/Days";

class Agenda extends Component {
  state = {
    startDay: moment(),
  };

  handleChangeMonth = (moment) => {
    this.setState({ startDay: moment });
  };

  render() {
    return (
      <div>
        <Days
          handleChangeNav={this.handleChangeMonth}
          startDay={this.state.startDay}
        />
      </div>
    );
  }
}

export default Agenda;
