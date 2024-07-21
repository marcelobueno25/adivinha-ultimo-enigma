import React from "react";
import "./styles.scss";

const Modal = ({ name, open, onClose, children, close = true }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-title-bar">
          <span className="modal-title">{name}</span>
          <div className="modal-controls">
            {close && (
              <button className="modal-button" onClick={onClose}>
                <img src="/img/close.png" alt="Close" />
              </button>
            )}
          </div>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
