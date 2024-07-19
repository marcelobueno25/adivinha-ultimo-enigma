import React, { useState } from "react";
import File from "../Windows95/File";
import { Modal, Box } from "@mui/material";
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
      photo: "/img/fotos/ma3.png",
    },
    {
      nameFile: "photo-sabrina.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa1.png",
    },
    {
      nameFile: "photo-sabrina2.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa2.png",
    },
    {
      nameFile: "photo-sabrina3.png",
      icon: "/img/ArquivoPainting.ico",
      photo: "/img/fotos/sa3.png",
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img className="photoGalleryPhoto" src={currentLevel?.photo} alt="" />
        </Box>
      </Modal>
    </div>
  );
};

export default PhotoGallery;
