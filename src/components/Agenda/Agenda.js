import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Days from "../Days/Days";

class Agenda extends Component {
  state = {
    startDay: moment(),
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">
                {"Agenda "}
              </Link>
              <Link to="/" className="navbar-brand">
                {this.state.startDay.format("MMMM Do YYYY, h:mm:ss a")}
              </Link>
            </nav>
            <div className="col-4"></div>
            <div className="col-8">
              <Days />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
