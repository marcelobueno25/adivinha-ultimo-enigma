import React from "react";
import "./styles.scss";
import closeicon from "../../assets/icons/close.png";

const CustomModal = ({
  name,
  icon = null,
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
          <span className="modal-title">
            {!!icon && <img src={icon} alt="icone" />}
            {name}
          </span>
          <div className="modal-controls">
            <button className="modal-button" onClick={onClose}>
              <img src={closeicon} alt="Close" />
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
