import React, { useState } from "react";
import File from "../File";
import CustomModal from "../../../components/CustomModal";
import StartGuess from "../../StartGuess";
import Map from "../../../pages/Map";
import PasswordPrompt from "../../../components/PasswordPrompt";
import ErrorScreen from "../../ErrorScreen";
import PhotoGallery from "../../PhotoGallery";
import Help from "../../Help";
import MSN from "../../MSN";
import "./styles.scss";

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
      nameFile: "Lixeira",
      nameWindows: "Lixeira",
      isWeb: false,
      icon: "/img/lixeira2.png",
      component: <></>,
      url: "",
      password: "",
    },
    {
      nameFile: "quiz.exe",
      nameWindows: "quiz.exe",
      isWeb: false,
      icon: "/img/Joy.ico",
      component: <StartGuess />,
      url: "",
      password: "",
    },
    {
      nameFile: "Mapa",
      nameWindows: "Mapa - Microsoft Internet Explorer",

      isWeb: true,
      icon: "/img/Earth2.ico",
      component: <Map />,
      url: "",
      password: "",
    },
    {
      nameFile: "Enigma",
      nameWindows: "Enigma",
      isWeb: true,
      icon: "/img/Folder.ico",
      component: <PhotoGallery />,
      url: "",
      password: "EMOREVIVEL",
    },
    {
      nameFile: "codigo.bat",
      nameWindows: "codigo.bat",
      isWeb: false,
      icon: "/img/Program.ico",
      component: <ErrorScreen />,
      url: "",
      password: "",
    },
    {
      nameFile: "MSN",
      nameWindows: "",
      isWeb: false,
      icon: "/img/msn.png",
      component: <MSN />,
      url: "",
      password: "",
    },
    {
      nameFile: "Ajuda",
      nameWindows: "Ajuda",
      isWeb: false,
      icon: "/img/Helpbook.ico",
      component: <Help />,
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
        name={currentLevel.nameWindows}
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
