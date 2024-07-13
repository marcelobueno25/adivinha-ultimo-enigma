import React, { useState } from "react";
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
          <span className="password-title"></span>
          <div className="password-controls">
            <button className="password-button" onClick={onCancel}>
              <img src="/img/icons/close.png" alt="Close" />
            </button>
          </div>
        </div>
        <div className="password-content">
          <h3>
            Digite a senha <br />
            para acessar o Nível 3
          </h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>OK</button>
        </div>
        <div className="password-actions"></div>
      </div>
    </div>
    // <div className="password-prompt">
    //   <div className="password-prompt-content">
    //     <h3>Digite a senha para acessar o Nível 3</h3>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button onClick={handleSubmit}>Enviar</button>
    //     <button onClick={onCancel}>Cancelar</button>
    //   </div>
    // </div>
  );
};

export default PasswordPrompt;
