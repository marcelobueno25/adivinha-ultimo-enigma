import React from "react";
import programFolder from "../../../assets/icons/ProgramFolder.png";
import folder from "../../../assets/icons/Folder.png";
import settings from "../../../assets/icons/Settings.png";
import search from "../../../assets/icons/Search.png";
import helpbook from "../../../assets/icons/Helpbook.png";
import programwait from "../../../assets/icons/Programwait.png";
import turnOffComputer from "../../../assets/icons/TurnOffComputer.png";
import "./styles.scss";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">Winlove 95</div>
      <ul>
        <li>
          <img src={programFolder} alt="Programs" /> Programas
        </li>
        <li>
          <img src={folder} alt="Documents" /> Documentos
        </li>
        <li>
          <img src={settings} alt="Settings" /> Configurações
        </li>
        <li>
          <img src={search} alt="Find" /> Procurar
        </li>
        <li>
          <img src={helpbook} alt="Help" /> Ajuda
        </li>
        <li>
          <img src={programwait} alt="Run" /> Executar...
        </li>
        <li>
          <img src={turnOffComputer} alt="Shutdown" />
          Desligar
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
