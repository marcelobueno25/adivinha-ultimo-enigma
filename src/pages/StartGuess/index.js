import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import Start from "./components/Start";
import Game from "./components/Game";
import Reveal from "./components/Reveal";
import "./styles.scss";

const StartGuess = () => {
  const { globalVariable } = useGlobalContext();
  const [screen, setScreen] = useState("");

  useEffect(() => {
    if (globalVariable.quizz) setScreen("end");
    else setScreen("start");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gameGuess">
      {screen && <></>}
      {screen === "start" && <Start handleNext={() => setScreen("game")} />}
      {screen === "game" && <Game handleNext={() => setScreen("end")} />}
      {screen === "end" && <Reveal handleNext={() => setScreen("start")} />}
    </div>
  );
};

export default StartGuess;
