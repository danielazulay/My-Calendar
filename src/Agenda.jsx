import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"
import { Link } from "react-router-dom";
import Days from "./Day"

class Agenda extends Component {
  state = {

    moth: [1, 2, 3, 4, 5, 6, 7],
 
    startDay:'',
  };

 



  render() {

    
    return (
      <div>
     
        <div className="container">
          <div className="row">
            <nav class="navbar navbar-dark bg-dark">
              <Link to="/" class="navbar-brand">
                {"Agenda "}
              </Link>
              <Link to="/" class="navbar-brand">
                {this.state.startDay}
              </Link>
            </nav>
            <div className="col-4"></div>

            <div className="col-8">
            {/*  {   <div className="row">
                {this.state.moth.map((day) => {
                  return <div className="col ">{day}</div>;
                })}
              </div>

              <div className="row">
                {this.state.moth.map((day) => {
                  return <div className="col ">{day}</div>;
                })}
              </div>

              <div className="row">
                {this.state.moth.map((day) => {
                  return <div className="col ">{day}</div>;
                })}
              </div>

              <div className="row">
                {this.state.moth.map((day) => {
                  return <div className="col ">{day}</div>;
                })}
              </div>

              <div className="row">
                <div className="col-2 ">29</div>
                <div className="col-2 ">30</div>
                <div className="col-2 ">31</div>
              </div> */}

            <Days/>
            </div> 
            </div> 
        </div> 
      
        
      </div>
    );
  }
}

export default Agenda;
