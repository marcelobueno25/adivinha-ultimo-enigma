import React, { useState } from "react";
import { ReactComponent as ComputerIcon } from "../../assets/computer.svg";
import clickSound from "../../assets/music/clickButton.mp3";
import { motion } from "framer-motion";
import Preloader from "../../components/Preloader";
import "./styles.scss";

const Computer = ({ handle }) => {
  const [active, setActive] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const handleActive = () => {
    const audio = new Audio(clickSound);
    audio.play();
    setActive(true);
    setTimeout(() => {
      setPreloader(true);
      setTimeout(() => handle(false), 5000);
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className={`container-computer ${active ? "active" : ""}`}>
        <p className="computer-text">
          Clique no <strong>botão</strong> em Vermelho
        </p>
        <div className="computer">
          <ComputerIcon />
          <span onClick={handleActive} className="computer-btn"></span>
          <span className="computer-quadrado"></span>
          {preloader && <Preloader />}
        </div>
      </div>
    </motion.div>
  );
};

export default Computer;
