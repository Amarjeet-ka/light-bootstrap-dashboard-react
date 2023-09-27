import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function PopupCard({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Card"
      overlayClassName="popup-overlay"
      className="popup-content"
    >
      {/* Your popup card content goes here */}
      <h2>Welcome to My Website</h2>
      <p>This is a popup card that appears when the site loads.</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default PopupCard;
