import React from 'react';

export default function ConfirmationModal({ isOpen, closeModal, message }) {
  return (
    <div className={`confirmation-modal ${isOpen ? 'open' : ''}`}>
      <div className="confirmation-modal-content">
        <span className="confirmation-close" onClick={closeModal}>&times;</span>
        <h1>¡Éxito!</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
