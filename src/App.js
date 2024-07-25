import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop from "./pages/Windows95/Desktop";
import StartMenu from "./pages/Windows95/StartMenu";
import { GlobalProvider } from "./Context/GlobalContext";
import logosmall from "./assets/logosmall.png";
import Computer from "./pages/Computer";
import "./styles/global.scss";

const App = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleLoading = () => setLoading(false);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return loading ? (
    <Computer handle={handleLoading} />
  ) : (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Desktop />} />
          </Routes>
          <div className="taskbar">
            <div className="start-button" onClick={toggleStartMenu}>
              <img src={logosmall} alt="Iniciar" />
              <span>Iniciar</span>
            </div>
            <div className="taskbar-time">
              {new Date().toLocaleTimeString()}
            </div>
            {startMenuOpen && <StartMenu />}
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
