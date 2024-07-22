import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import File from "../File";
import CustomModal from "../../../components/CustomModal";
import StartGuess from "../../StartGuess";
import Map from "../../../pages/Map";
import PasswordPrompt from "../../../components/PasswordPrompt";
import ErrorScreen from "../../ErrorScreen";
import PhotoGallery from "../../PhotoGallery";
import Help from "../../Help";
import MSN from "../../MSN";
import Inbox from "../../Inbox";
import joyicon from "../../../assets/icons/Joy.png";
import earthicon from "../../../assets/icons/Earth.png";
import foldericon from "../../../assets/icons/Folder.png";
import programicon from "../../../assets/icons/Program.png";
import inboxicon from "../../../assets/icons/inbox.png";
import msnicon from "../../../assets/icons/msn.png";
import helpbookicon from "../../../assets/icons/Helpbook.png";
import "./styles.scss";

const initial = {
  name: "",
  icon: "",
  component: <></>,
};

const Desktop = () => {
  const { globalVariable, setGlobalVariable } = useGlobalContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(initial);
  const [passwordPrompt, setPasswordPrompt] = useState(false);

  const db_pastas = useRef([
    {
      nameFile: "quiz.exe",
      nameWindows: "quiz.exe",
      isWeb: false,
      icon: joyicon,
      component: <StartGuess />,
      url: "",
      password: "",
    },
    {
      nameFile: "Mapa",
      nameWindows: "Mapa - MemoirSoft Internet Explorer",

      isWeb: true,
      icon: earthicon,
      component: <Map />,
      url: "",
      password: "",
    },
    {
      nameFile: "Galeria",
      nameWindows: "Galeria",
      isWeb: false,
      icon: foldericon,
      component: <PhotoGallery />,
      url: "",
      password: "EMOREVIVEL",
    },
    {
      nameFile: "codigo.bat",
      nameWindows: "codigo.bat",
      isWeb: false,
      icon: programicon,
      component: <ErrorScreen />,
      url: "",
      password: "",
    },
    {
      nameFile: "Inbox",
      nameWindows: "Inbox",
      isWeb: false,
      icon: inboxicon,
      component: <Inbox />,
      url: "",
      password: "",
    },
    {
      nameFile: "MSN",
      nameWindows: "msn messenger",
      isWeb: false,
      icon: msnicon,
      component: <MSN />,
      url: "",
      password: "",
    },
    {
      nameFile: "Ajuda",
      nameWindows: "Ajuda",
      isWeb: false,
      icon: helpbookicon,
      component: <Help />,
      url: "",
      password: "",
    },
  ]);

  useEffect(() => {
    const helpModal = db_pastas.current.find(
      (file) => file.nameFile === "Ajuda"
    );
    if (helpModal) {
      setCurrentLevel(helpModal);
      setModalOpen(true);
    }
  }, []);

  const handleOpenModal = (level) => {
    setCurrentLevel(level);
    if (level.password) {
      if (globalVariable.gallery) setModalOpen(true);
      else setPasswordPrompt(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentLevel(initial);
  };

  const handlePasswordSubmit = (password) => {
    if (password.toLowerCase() === currentLevel.password.toLowerCase()) {
      setPasswordPrompt(false);
      setModalOpen(true);
      setGlobalVariable({ ...globalVariable, gallery: true });
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="desktop">
      {db_pastas.current.map((e, index) => {
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
