import React from "react";
import Guess from "../../components/Guess";
//import { DB_WORDSLIST } from "../../db";
import "./styles.scss";

const Game = () => {
  return (
    <div className="containerHome">
      <Guess />
    </div>
  );
};

export default Game;
