import React from "react";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

import "./NewEventModal.css";

ReactModal.setAppElement("#root");

class NewEventModal extends Component {
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.showModal}
          onRequestClose={this.props.handleCloseModal}
          contentLabel="New Event Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h5>New Event</h5>

          <div className="form-group">
            <form onSubmit={this.props.handleSubmit}>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Event name"
                name="eventName"
                value={this.props.eventName}
                onChange={this.props.handleChange}
                required
              />
              <input
                className="form-control mt-2"
                placeholder="Event description"
                type="text"
                name="description"
                value={this.props.description}
                onChange={this.props.handleChange}
                required
              />
              <input
                className="form-control mt-2 mb-2"
                placeholder="Event date"
                type="date"
                name="date"
                value={this.props.clickedDay}
                onChange={this.props.handleChange}
                required
              />

              <select
                className="form-select"
                aria-label="Categories"
                name="type"
                value={this.props.type}
                onChange={this.props.handleChange}
              >
                <option defaultValue>Select a category</option>
                <option value="Task">Task</option>
                <option value="Reminder">Reminder</option>
                <option value="Work">Work/School</option>
                <option value="Fun">Fun</option>
                <option value="Travel">Travel</option>
              </select>
              <div className="form-group d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary mt-3">
                  Save
                </button>
                <button
                  onClick={this.props.handleCloseModal}
                  className="btn btn-secondary mt-3"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default NewEventModal;
