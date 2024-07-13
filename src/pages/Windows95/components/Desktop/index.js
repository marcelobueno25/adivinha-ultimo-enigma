import React, { useState } from "react";
import File from "../File";
import ModalWindow from "../../../../components/ModalWindow";
import StartGuess from "../../../StartGuess";
import "./styles.scss";
import Map from "../../../../pages/Map";

const initial = {
  name: "",
  icon: "",
  component: <></>,
};

const Desktop = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(initial);

  const db_pastas = [
    {
      name: "quiz.exe",
      icon: "/img/windows/Program.ico",
      component: <StartGuess />,
    },
    {
      name: "Mapa",
      icon: "/img/windows/Earth(16 colors).ico",
      component: <Map />,
    },
    {
      name: "Level 3",
      icon: "/img/windows/Folder.ico",
      component: <></>,
    },
    {
      name: "Level 4",
      icon: "/img/windows/Folder.ico",
      component: <></>,
    },
  ];

  const handleOpenModal = (level) => {
    setCurrentLevel(level);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentLevel(initial);
  };

  return (
    <div className="desktop">
      {db_pastas.map((e, index) => {
        return (
          <File
            name={e.name}
            icon={e.icon}
            onClick={() => handleOpenModal(e)}
          />
        );
      })}
      <ModalWindow
        name={currentLevel.name}
        open={modalOpen}
        onClose={handleCloseModal}
      >
        {currentLevel.component}
      </ModalWindow>
    </div>
  );
};

export default Desktop;
