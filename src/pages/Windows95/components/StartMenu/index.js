import React from "react";
import "./styles.scss";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">Windows 95</div>
      <ul>
        <li>
          <img src="/img/ProgramFolder.ico" alt="Programs" /> Programs
        </li>
        <li>
          <img src="/img/Folder.ico" alt="Documents" /> Documents
        </li>
        <li>
          <img src="/img/windows/Settings.ico" alt="Settings" /> Settings
        </li>
        <li>
          <img src="/img/Search.ico" alt="Find" /> Find
        </li>
        <li>
          <img src="/img/Helpbook.ico" alt="Help" /> Help
        </li>
        <li>
          <img src="/img/Programwait.ico" alt="Run" /> Run...
        </li>
        <li>
          <img src="/img/TurnOffComputer.ico" alt="Shutdown" />
          Shutdown
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
