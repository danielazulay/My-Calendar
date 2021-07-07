import { Component } from "react";
import axios from "axios";

class DeleteEventDay extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ironrest.herokuapp.com/calendar/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.props.match.params.id);
    return <div>Deleting...</div>;
  }
}

export default DeleteEventDay;
