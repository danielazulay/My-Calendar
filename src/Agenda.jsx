import {Component} from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'

import { Link } from "react-router-dom";


class Agenda extends Component{


render(){

    return(

<div>



<div className="container">
<div className="row">
<nav class="navbar navbar-dark bg-dark">
<Link to="/" class="navbar-brand" >Agenda </Link>
<Link to="/" class="navbar-brand" >{new Date().toDateString()}</Link>

</nav>
<div className="col-4"> 



</div>

<div className="col-8"> 




  <div className="row">
    <div className="col ">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>
  <div className="row">
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>
  <div className="row">
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>
  <div className="row">
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
    <div className="col">Column</div>
  </div>
  <div className="row ">

    <div class="col-2">Column</div>
    <div class="col-2">Column</div>
    <div class="col-2">Column</div>


  </div>
  </div>
  
  </div>

</div>



</div>
    )
}



}

export default Agenda