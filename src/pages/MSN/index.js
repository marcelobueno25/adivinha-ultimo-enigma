import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { LOGIN_MSN } from "../../util/db";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./styles.scss";

const MSN = () => {
  const { globalVariable, setGlobalVariable } = useGlobalContext();
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (globalVariable.msn) {
      setLoggedIn(true);
    }
  }, [globalVariable]);

  const handleLogin = (email, password) => {
    if (email === LOGIN_MSN.email_sabrina && password === LOGIN_MSN.password) {
      setLoggedIn(true);
      setErrorMessage("");
      setGlobalVariable({ ...globalVariable, msn: true });
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
