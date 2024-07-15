// src/Mapa.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Typography } from "@mui/material";
import coracao from "../../assets/coracao.png";
import Modal from "../../components/Modal";
import { LOCATIONS_LIST } from "../../util/db";
import "leaflet/dist/leaflet.css";
import "./styles.scss";

const heartIcon = new L.Icon({
  iconUrl: coracao,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const Map = () => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleOpen = (info) => {
    setModalInfo(info);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const position = [-14.235, -51.9253];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="grayscale"
        />
        {LOCATIONS_LIST.map((e) => (
          <Marker
            position={e.position}
            icon={heartIcon}
            eventHandlers={{
              click: () =>
                handleOpen({
                  name: e.name,
                  info: e.info,
                }),
            }}
          ></Marker>
        ))}
      </MapContainer>

      <Modal
        open={open}
        onClose={handleClose}
        name={modalInfo.name}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {modalInfo.name}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {modalInfo.info}
        </Typography>
      </Modal>
    </div>
  );
};

export default Map;
