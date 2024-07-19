import React from "react";
import "./styles.scss";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">Winlove 95</div>
      <ul>
        <li>
          <img src="/img/ProgramFolder.ico" alt="Programs" /> Programas
        </li>
        <li>
          <img src="/img/Folder.ico" alt="Documents" /> Documentos
        </li>
        <li>
          <img src="/img/Settings.ico" alt="Settings" /> Configurações
        </li>
        <li>
          <img src="/img/Search.ico" alt="Find" /> Procurar
        </li>
        <li>
          <img src="/img/Helpbook.ico" alt="Help" /> Ajuda
        </li>
        <li>
          <img src="/img/Programwait.ico" alt="Run" /> Executar...
        </li>
        <li>
          <img src="/img/TurnOffComputer.ico" alt="Shutdown" />
          Desligar
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
