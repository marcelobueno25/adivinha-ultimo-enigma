import React from "react";
import "./styles.scss";

const CustomModal = ({
  name,
  url = "https://quizsecreto.netlify.app/",
  open,
  onClose,
  children,
  isWeb = false,
}) => {
  if (!open) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="modal-title-bar">
          <span className="modal-title">{name}</span>
          <div className="modal-controls">
            <button className="modal-button" onClick={onClose}>
              <img src="/img/close.png" alt="Close" />
            </button>
          </div>
        </div>
        <div className="modal-toolbar">
          <button>Arquivo</button>
          <button>Editar</button>
          <button>Visualizar</button>
          <button>Favoritos</button>
          <button>Ajuda</button>
        </div>
        {isWeb && (
          <div className="modal-address-bar">
            <span>Endereço:</span>
            <input type="text" value={url} readOnly />
          </div>
        )}
        <div className="modal-content">{children}</div>
        <div className="modal-actions"></div>
      </div>
    </div>
  );
};

export default CustomModal;
