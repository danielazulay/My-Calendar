import React from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

Modal.setAppElement("#root");

class NewEventModal extends Component {





  render() {
    console.log(this.props.clickedDay);
    return (
      <div>
        <Modal
          isOpen={this.props.showModal}
          onRequestClose={this.props.handleCloseModal}
          contentLabel="New Event Modal"
        >
          <div className="form-group">
            <form >
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Event name"
                name="eventName"
                value={this.props.eventName}
                onChange={this.props.handleChange}
              />
              <input
                className="form-control mt-2"
                placeholder="Event description"
                type="text"
                name="description"
                value={this.props.description}
                onChange={this.props.handleChange}
              />
              <input
                className="form-control mt-2"
                placeholder="Event date"
                type="date"
                name="date"
                value={this.props.clickedDay}
                onChange={this.props.handleChange}
              />

              <div className="form-group">
                <button type="submit" className="btn btn-primary mt-3" onClick={this.props.handleSubmit}>
                  Save
                </button>
                <button
                  onClick={this.props.handleCloseModal}
                  className="btn btn-danger mt-3"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default NewEventModal;
