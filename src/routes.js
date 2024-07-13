import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import StartGuess from "./pages/StartGuess";
import Reveal from "./pages/Reveal";
import Menu from "./pages/Menu";
import Windows95 from "./pages/Windows95";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Windows95 />} />
        <Route path="/start" element={<StartGuess />} />{" "}
        <Route path="/game" element={<Game />} />
        <Route path="/reveal" element={<Reveal />} />
        <Route path="/windows95" element={<Windows95 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
