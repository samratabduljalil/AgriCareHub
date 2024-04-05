// Modal.js
import React from 'react';
import './modal.css'; // Import CSS for styling the modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>X</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;