import React from "react";

export default function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
