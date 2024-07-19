import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import SquareIcon from "@mui/icons-material/Circle";
import "./styles.scss";

const Login = ({ onLogin, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="msn-login">
      <div className="msn-login-container">
        <div className="msn-header">
          <div className="msn-header-logo">
            <img src="/img/msnText.png" alt="MSN" />
            <span>Messenger</span>
          </div>
        </div>
        <div className="msn-body">
          <img src="/img/msnLogin.png" alt="MSN Logo" className="msn-logo" />
          <form onSubmit={handleSubmit}>
            <div className="msn-input-group">
              <label>E-mail address:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite o e-mail"
                required
              />
            </div>
            <div className="msn-input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="digite a senha"
                required
              />
            </div>
            <div className="msn-status-group">
              <label>Status:</label>
              <div className="msn-status-select">
                <Select
                  variant="standard"
                  defaultValue={"online"}
                  sx={{ maxWidth: 180 }}
                  fullWidth
                >
                  <MenuItem value={"online"}>
                    <SquareIcon
                      sx={{
                        color: "#168821",
                        fontSize: 10,
                        marginRight: 1,
                        marginLeft: 1,
                      }}
                    />
                    Disponível
                  </MenuItem>
                  <MenuItem value={"ocupado"}>
                    <SquareIcon
                      sx={{
                        color: "#FFCD07",
                        fontSize: 10,
                        marginRight: 1,
                        marginLeft: 1,
                      }}
                    />
                    Ocupado
                  </MenuItem>
                  <MenuItem value={"ausente"}>
                    <SquareIcon
                      sx={{
                        color: "#E52207",
                        fontSize: 10,
                        marginRight: 1,
                        marginLeft: 1,
                      }}
                    />
                    Ausente
                  </MenuItem>
                </Select>
              </div>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
