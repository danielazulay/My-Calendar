import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Days from "../Days/Days";

import "./Agenda.css";

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
        <div className="mx-5">
          <div className="row">
            <nav className="navbar navbar-dark">
              <Link to="/" className="navbar-brand">
                {"My personal calendar"}
              </Link>
              <Link to="/" className="navbar-brand">
                {this.state.startDay.format("MMMM YYYY")}
              </Link>
            </nav>

            <div>
              <Days handleChangeNav={this.handleChangeMonth} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
