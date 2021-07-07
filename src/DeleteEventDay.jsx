/* import { Component } from "react";
import axios from "axios";

// D do CRUD (DELETE): Deleta um registro específico

class DeleteEventDay extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ironrest.herokuapp.com/calendar/${id}`)
      .then((response) => {

     
      })
      .catch((err) => console.log(err));
  };

  


  render() {
     
    return <div>Deleting...</div>;
  }
}

export default DeleteEventDay; */
