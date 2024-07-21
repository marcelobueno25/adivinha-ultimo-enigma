import React, { useState } from "react";
import File from "../Windows95/File";
import "./styles.scss";
import Modal from "../../components/Modal";

const initial = {
  name: "",
  icon: "",
  component: <></>,
};

const PhotoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(initial);

  const db_pastas = [
    {
      nameFile: "photo-marcelo.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/ma1.png",
    },
    {
      nameFile: "photo-marcelo2.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/ma2.png",
    },
    {
      nameFile: "photo-marcelo3.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/ma4.png",
    },
    {
      nameFile: "photo-sabrina.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa1.png",
    },
    {
      nameFile: "photo-sabrina2.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa3.png",
    },
    {
      nameFile: "photo-sabrina3.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa4.png",
    },
  ];

  const handleOpenModal = (level) => {
    setCurrentLevel(level);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="photoGallery">
      {db_pastas.map((e, index) => {
        return (
          <File
            name={e.nameFile}
            icon={e.icon}
            onClick={() => handleOpenModal(e)}
            color="#000"
          />
        );
      })}

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        name={currentLevel.nameFile}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <img className="photoGalleryPhoto" src={currentLevel?.photo} alt="" />
      </Modal>
    </div>
  );
};

export default PhotoGallery;
