import React, { useState } from "react";
import closeicon from "../../assets/icons/close.png";
import blockkey from "../../assets/icons/blockkey.png";
import "./styles.scss";

const PasswordPrompt = ({ onSubmit, onCancel }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(password);
    setPassword("");
  };

  return (
    <div className="custom-password-overlay">
      <div className="custom-password">
        <div className="password-title-bar">
          <span className="password-title">
            <img src={blockkey} alt="icone" />
            Acesso Restrito
          </span>
          <div className="password-controls">
            <button className="password-button" onClick={onCancel}>
              <img src={closeicon} alt="Close" />
            </button>
          </div>
        </div>
        <div className="password-content">
          <div className="password-content-texts">
            <div>
              <img src={blockkey} alt="Close" />
            </div>
            <div>
              <p>
                Para acessar esta pasta, é necessário digitar a senha. Por
                favor, insira a senha abaixo:
              </p>
            </div>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button onClick={handleSubmit}>OK</button>
        </div>
        <div className="password-actions"></div>
      </div>
    </div>
  );
};

export default PasswordPrompt;
