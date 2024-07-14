// src/Mapa.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Typography } from "@mui/material";
import coracao from "../../assets/coracao.png";
import Modal from "../../components/Modal";
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

  const DB_LOGAIS = [
    {
      name: "Beco Hexagonal",
      info: "descritivo",
      img: "",
      position: [-23.604850624951656, -46.66928501687851],
    },
    {
      name: "Willi Willie Bar e Arquería",
      info: "descritivo",
      img: "",
      position: [-23.60998570862644, -46.667591720328595],
    },
    {
      name: "Kiss Me",
      info: "descritivo",
      img: "",
      position: [-23.644367518246103, -46.734530805231635],
    },
    {
      name: "Motel Frenesi",
      info: "descritivo",
      img: "",
      position: [-23.644526984508566, -46.7312326168775],
    },
    {
      name: "Roller Jam",
      info: "descritivo",
      img: "",
      position: [-23.613987239334786, -46.66650030523247],
    },
    {
      name: "Bario",
      info: "descritivo",
      img: "",
      position: [-23.56117655946947, -46.693975005234094],
    },
    {
      name: "SubAstor Bar do Cofre",
      info: "descritivo",
      img: "",
      position: [-23.545673296363347, -46.63420963222183],
    },
    {
      name: "Parque Villa-Lobos",
      info: "descritivo",
      img: "",
      position: [-23.546131684562962, -46.725332907287886],
    },
    {
      name: "Shopping Eldorado",
      info: "descritivo",
      img: "",
      position: [-23.57227173807113, -46.695943330373446],
    },
    {
      name: "Shopping Tamboré",
      info: "descritivo",
      img: "",
      position: [-23.504171289552094, -46.83438280914349],
    },
    {
      name: "Shopping Vila Olímpia - Outback",
      info: "descritivo",
      img: "",
      position: [-23.595116010505077, -46.68666034260315],
    },
  ];

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
        {DB_LOGAIS.map((e) => (
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
