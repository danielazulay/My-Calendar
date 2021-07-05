import React from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function NewEventModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary">
        New event
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="New Event Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Event</h2>

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
              <button onClick={closeModal} className="btn btn-danger mt-3">
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default NewEventModal;
