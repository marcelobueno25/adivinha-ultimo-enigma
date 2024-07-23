// src/Mapa.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Typography } from "@mui/material";
import coracao from "../../assets/icons/coracao.png";
import Modal from "../../components/Modal";
import { LOCATIONS_LIST, LOCATIONS_LIST_NEW } from "../../util/db";
import Confetti from "react-confetti";
import { useGlobalContext } from "../../Context/GlobalContext";
import "leaflet/dist/leaflet.css";
import "./styles.scss";

const initial = {
  name: "",
  info: "",
  img: "",
  position: [0, 0],
  confetti: false,
};

const heartIcon = new L.Icon({
  iconUrl: coracao,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const Map = () => {
  const { globalVariable } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(initial);
  const [locais, setLocais] = useState([]);

  const handleOpen = (info) => {
    setModalInfo(info);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const position = [-23.5505, -46.6333]; // Coordenadas para São Paulo
  const bounds = [
    [-24.5, -47.5], // Sudoeste
    [-22.5, -45.5], // Nordeste
  ];

  useEffect(() => {
    globalVariable.msn
      ? setLocais(LOCATIONS_LIST_NEW)
      : setLocais(LOCATIONS_LIST);
  }, [globalVariable]);

  return (
    <div className="mapContent">
      <MapContainer
        center={position}
        maxZoom={14}
        zoom={10}
        minZoom={8}
        style={{ height: "100%", width: "100%" }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="grayscale"
        />
        {!!locais.length &&
          locais.map((e) => (
            <Marker
              position={e.position}
              icon={heartIcon}
              eventHandlers={{
                click: () => handleOpen(e),
              }}
            ></Marker>
          ))}
      </MapContainer>

      <Modal
        open={open}
        onClose={handleClose}
        name={modalInfo.name}
        icon={coracao}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {modalInfo.name}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {modalInfo.info}
        </Typography>
      </Modal>

      {open && modalInfo?.confetti && (
        <div
          style={{
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Confetti
            style={{
              zIndex: 9999,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            numberOfPieces={100}
          />
        </div>
      )}
    </div>
  );
};

export default Map;
