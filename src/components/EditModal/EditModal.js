import React from "react";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EditModal.css";

ReactModal.setAppElement("#root");

class EditModal extends Component {
  state = {
    eventName: this.props.eventName,
    description: this.props.description,
    date: this.props.date,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete= (prevProps) => {
    const id = this.props.clickedDay;

    axios
      .delete(`https://ironrest.herokuapp.com/calendar/${id}`)
      .then((response) => {
        this.props.handleCloseModalEdit();
       
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.clickedDay !== this.props.clickedDay) {
      const id = this.props.clickedDay;
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/calendar/${id}`
        );

        this.setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const id = this.props.clickedDay;

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/calendar/${id}`,
        {
          eventName: this.state.eventName,
          description: this.state.description,
          date: this.state.date,
        }
      );
      this.props.handleCloseModalEdit();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.props.clickedDay);
    return (
      <div>
        <ReactModal
          isOpen={this.props.showModalEdit}
          onRequestClose={this.props.handleCloseModalEdit}
          contentLabel="Edit Event Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h5>Edit event</h5>

          <div className="form-group">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Event name"
                name="eventName"
                value={this.state.eventName}
                onChange={this.handleChange}
                // required
              />
              <input
                className="form-control mt-2"
                placeholder="Event description"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                // required
              />
              <input
                className="form-control mt-2"
                placeholder="Event date"
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                // required
              />

              <div className="form-group d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary mt-3">
                  Save
                </button>
                <button
                  className="btn btn-secondary mt-3"
                  onClick={this.props.handleCloseModalEdit}
                >
                  Close
                </button>

                {/*   <Link
                  to={`/delete-eventDay/${this.props.clickedDay}`}
                  title="Delete eventDay"
                 
                > */}

                <button
                  className="btn btn-danger mt-3"
                  onClick={this.handleDelete}
                  
                >
                  Delete
                </button>

                {/*     </Link> */}
              </div>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default EditModal;
