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

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-dark">
              <Link to="/" className="navbar-brand">
                {"My personal Calendar"}
              </Link>
              <Link to="/" className="navbar-brand">
                {this.state.startDay.format("MMMM YYYY")}
              </Link>
            </nav>

            <div className="col-12">
              <Days />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
