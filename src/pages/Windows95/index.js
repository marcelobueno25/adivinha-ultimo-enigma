import React, { useState } from "react";
import Desktop from "./components/Desktop";
import ModalWindow from "./components/ModalWindow";
import StartMenu from "./components/StartMenu";
import "./styles.scss";

const Windows95 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subScreenOpen, setSubScreenOpen] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const today = new Date();
  const unlockDate = new Date("2024-07-14");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSubScreenOpen(false);
  };

  const handleOpenSubScreen = () => {
    setSubScreenOpen(true);
  };

  const handleCloseSubScreen = () => {
    setSubScreenOpen(false);
  };

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return (
    <div className="App">
      <Desktop
        onOpenModal={handleOpenModal}
        unlockDate={unlockDate}
        today={today}
      />
      <ModalWindow
        open={modalOpen}
        onClose={handleCloseModal}
        subScreenOpen={subScreenOpen}
        handleOpenSubScreen={handleOpenSubScreen}
        handleCloseSubScreen={handleCloseSubScreen}
      />
      <div className="taskbar">
        <div className="start-button" onClick={toggleStartMenu}>
          <img src="/start-button.png" alt="Start" />
          <span>Start</span>
        </div>
        <div className="taskbar-time">{new Date().toLocaleTimeString()}</div>
        {startMenuOpen && <StartMenu />}
      </div>
    </div>
  );
};

export default Windows95;
