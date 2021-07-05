import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"
import { Link } from "react-router-dom";
import Days from "../Days/Days.js"

class Agenda extends Component {
  state = {

 
 
    startDay:moment(),
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
                {this.state.startDay.format('MMMM')}
              </Link>

          

            </nav>
     
            <div className="col-4"></div>

            <div  className="col-8">
           

            <Days/>
            </div> 
            </div> 
        </div> 
      
        
      </div>
    );
  }
}

export default Agenda;
