import React, { useState } from "react";
import File from "../File";
import ModalWindow from "../ModalWindow";
import StartGuess from "../../../StartGuess";
import "./styles.scss";

const Desktop = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);

  const handleOpenModal = (level) => {
    setCurrentLevel(level);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentLevel(null);
  };

  const getLevelContent = () => {
    switch (currentLevel) {
      case 1:
        return <StartGuess />;
      case 2:
        return <StartGuess />;
      case 3:
        return <StartGuess />;
      case 4:
        return <StartGuess />;
      case 5:
        return <StartGuess />;
      default:
        return null;
    }
  };

  return (
    <div className="desktop">
      <File name="Level 1" onClick={() => handleOpenModal(1)} />
      <File name="Level 2" onClick={() => handleOpenModal(2)} />
      <File name="Level 3" onClick={() => handleOpenModal(3)} />
      <File name="Level 4" onClick={() => handleOpenModal(4)} />
      <File name="Level 5" onClick={() => handleOpenModal(5)} />
      <ModalWindow open={modalOpen} onClose={handleCloseModal}>
        {getLevelContent()}
      </ModalWindow>
    </div>
  );
};

export default Desktop;
