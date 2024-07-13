import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop from "./pages/Windows95/components/Desktop";
import StartMenu from "./pages/Windows95/components/StartMenu";
import Preloader from "./components/Preloader";
import "./styles/global.scss";

const App = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos de carregamento
  }, []);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return loading ? (
    <Preloader />
  ) : (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Desktop />} />
        </Routes>
        <div className="taskbar">
          <div className="start-button" onClick={toggleStartMenu}>
            <img src="img/icons/start-button.png" alt="Start" />
            <span>Iniciar</span>
          </div>
          <div className="taskbar-time">{new Date().toLocaleTimeString()}</div>
          {startMenuOpen && <StartMenu />}
        </div>
      </div>
    </Router>
  );
};

export default App;
