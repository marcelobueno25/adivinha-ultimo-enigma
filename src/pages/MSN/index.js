import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { LOGIN_MSN } from "../../util/db";
import "./styles.scss";

const MSN = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (email, password) => {
    if (email === LOGIN_MSN.email_sabrina && password === LOGIN_MSN.password) {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      if (
        email !== LOGIN_MSN.email_sabrina &&
        password !== LOGIN_MSN.password
      ) {
        setErrorMessage("Email e senha incorretos.");
      } else if (email !== LOGIN_MSN.email_sabrina) {
        setErrorMessage("Email incorreto.");
      } else if (password !== LOGIN_MSN.password) {
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
