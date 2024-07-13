import React, { useState } from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import Reveal from "./components/Reveal";

const StartGuess = () => {
  const [screen, setScreen] = useState("start");

  return (
    <>
      {screen === "start" && <Start handleNext={() => setScreen("game")} />}
      {screen === "game" && <Game handleNext={() => setScreen("end")} />}
      {screen === "end" && <Reveal handleNext={() => setScreen("start")} />}
    </>
  );
};

export default StartGuess;
