import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ContactModal({ isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      backgroundColor: "#242424",
      border: "none",
      color: "#f3f3f3",
      borderRadius: "16px",
      padding: "3rem",
      width: "100%",
      maxWidth: "900px",
      top: "auto",
      bottom: "auto",
      left: "auto",
      right: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Us"
      style={customStyles}
    >
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch with us.</p>
      <form>
        <div className="form-group">
          <label className="form-label" for="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" for="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" for="message">
            Message
          </label>
          <textarea
            className="form-input"
            style={{ minWidth: "100%", maxWidth: "100%" }}
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button className="form-button" type="submit">
          Send
        </button>
      </form>
      <button className="close-button" onClick={onRequestClose}>
        <XMarkIcon />
      </button>
    </Modal>
  );
}

export default ContactModal;
