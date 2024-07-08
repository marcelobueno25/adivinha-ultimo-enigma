import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Reveal from "./pages/Reveal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/game" element={<Game />} exact />
        <Route path="/reveal" element={<Reveal />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
