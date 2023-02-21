import Modal from 'react-modal';

function ContactModal({ isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f9f9f9',
      color: '#333',
      borderRadius: '10px',
      padding: '1rem',
      maxWidth: '900px', 
      maxHeight: '60svh', 
      
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Contact Us" style={customStyles}>
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch with us.</p>
      <div class="wrapper">
        <form class="main">
          <div class="main__wrapper">
            <div class="form-group">
              <label class="form-label" for="name">Name</label>
              <input class="form-input" type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email</label>
              <input class="form-input" type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="message">Message</label>
              <textarea class="form-input" id="message" name="message" required></textarea>
            </div>
            <button class="form-button" type="submit">Send</button>
          </div>
        </form>
      </div>
            <button className= 'close-button' onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ContactModal;