import React, { useState } from "react";
import File from "../Windows95/File";
import Modal from "../../components/Modal";
import arquivoPaintingicon from "../../assets/icons/ArquivoPainting.ico";
import ma1 from "../../assets/photos/ma1.png";
import ma2 from "../../assets/photos/ma2.png";
import ma4 from "../../assets/photos/ma4.png";
import sa1 from "../../assets/photos/sa1.png";
import sa3 from "../../assets/photos/sa3.png";
import sa4 from "../../assets/photos/sa4.png";
import "./styles.scss";

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
      icon: arquivoPaintingicon,
      photo: ma1,
    },
    {
      nameFile: "photo-marcelo2.png",
      icon: arquivoPaintingicon,
      photo: ma2,
    },
    {
      nameFile: "photo-marcelo3.png",
      icon: arquivoPaintingicon,
      photo: ma4,
    },
    {
      nameFile: "photo-sabrina.png",
      icon: arquivoPaintingicon,
      photo: sa1,
    },
    {
      nameFile: "photo-sabrina2.png",
      icon: arquivoPaintingicon,
      photo: sa3,
    },
    {
      nameFile: "photo-sabrina3.png",
      icon: arquivoPaintingicon,
      photo: sa4,
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
      <div className="photoGalleryContent">
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
      </div>
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
