import React, { useState } from "react";
import File from "../File";
import CustomModal from "../../../../components/CustomModal";
import StartGuess from "../../../StartGuess";
import "./styles.scss";
import Map from "../../../../pages/Map";
import PasswordPrompt from "../../../../components/PasswordPrompt";
import ErrorScreen from "../../../ErrorScreen";

const initial = {
  name: "",
  icon: "",
  component: <></>,
};

const Desktop = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(initial);
  const [passwordPrompt, setPasswordPrompt] = useState(false);

  const db_pastas = [
    {
      nameFile: "quiz.exe",
      nameWeb: "quiz.exe",
      isWeb: false,
      icon: "/img/windows/Program.ico",
      component: <StartGuess />,
      url: "",
      password: "",
    },
    {
      nameFile: "Mapa",
      nameWeb: "Mapa - Microsoft Internet Explorer",

      isWeb: true,
      icon: "/img/windows/Earth(16 colors).ico",
      component: <Map />,
      url: "",
      password: "",
    },
    {
      nameFile: "Level 3",
      nameWeb: "Level 3",
      isWeb: true,
      icon: "/img/windows/Folder.ico",
      component: <></>,
      url: "",
      password: "teste",
    },
    {
      nameFile: "Level 4",
      nameWeb: "Level 4 - Microsoft Internet Explorer",
      isWeb: false,
      icon: "/img/windows/Folder.ico",
      component: <ErrorScreen />,
      url: "",
      password: "",
    },
  ];

  const handleOpenModal = (level) => {
    setCurrentLevel(level);
    if (level.password) {
      setPasswordPrompt(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentLevel(initial);
  };

  const handlePasswordSubmit = (password) => {
    if (password === currentLevel.password) {
      // Substitua 'senha123' pela senha correta
      setPasswordPrompt(false);
      //setCurrentLevel(3);
      setModalOpen(true);
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="desktop">
      {db_pastas.map((e, index) => {
        return (
          <File
            name={e.nameFile}
            icon={e.icon}
            onClick={() => handleOpenModal(e)}
          />
        );
      })}

      <CustomModal
        name={currentLevel.nameWeb}
        open={modalOpen}
        onClose={handleCloseModal}
        isWeb={currentLevel.isWeb}
      >
        {currentLevel.component}
      </CustomModal>

      {passwordPrompt && (
        <PasswordPrompt
          onSubmit={handlePasswordSubmit}
          onCancel={() => setPasswordPrompt(false)}
        />
      )}
    </div>
  );
};

export default Desktop;
