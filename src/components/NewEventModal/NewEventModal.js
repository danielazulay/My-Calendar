import React from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

class NewEventModal extends Component {
  state = {
    showModal: false,
  };

  handleOpenModal = (event) => {
    this.setState({ showModal: true });
  };

  handleCloseModal = (event) => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="btn btn-primary">
          New event
        </button>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="New Event Modal"
        >
          <div className="form-group">
            <form>
              <input
                className="form-control mt-3"
                label="Event name"
                type="text"
              />
              <input
                className="form-control mt-2"
                label="Event description"
                type="text"
              />
              <input
                className="form-control mt-2"
                label="Event date"
                type="date"
              />

              <div className="form-group">
                <button type="submit" className="btn btn-primary mt-3">
                  Save
                </button>
                <button
                  onClick={this.handleCloseModal}
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
