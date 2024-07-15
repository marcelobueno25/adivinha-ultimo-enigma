import React, { useState } from "react";
import "./styles.scss";

const Chat = ({ onLogout }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, message]);
      setMessage("");
    }
  };

  return (
    <div className="msn-chat">
      <div className="msn-chat-header">
        <h2>MSN Chat</h2>
        <button onClick={onLogout}>Sair</button>
      </div>
      <div className="msn-chat-window">
        {chat.map((msg, index) => (
          <div key={index} className="msn-chat-message">
            <span>Você: </span>
            {msg}
          </div>
        ))}
      </div>
      <form className="msn-chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
