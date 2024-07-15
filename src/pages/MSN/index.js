import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./styles.scss";

const MSN = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (email, password) => {
    if (email === "biscotinhogostoso@msn.com.br" && password === "solove") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      if (email !== "biscotinhogostoso@msn.com.br" && password !== "solove") {
        setErrorMessage("Email e senha incorretos.");
      } else if (email !== "biscotinhogostoso@msn.com.br") {
        setErrorMessage("Email incorreto.");
      } else if (password !== "solove") {
        setErrorMessage("Senha incorreta.");
      }
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="msn">
      {loggedIn ? (
        <Chat onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default MSN;
