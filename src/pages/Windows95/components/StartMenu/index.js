import React from "react";
import "./styles.scss";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">Windows 95</div>
      <ul>
        <li>
          <img
            src="/img/windows/ProgramFolder(16x16px&32x32px).ico"
            alt="Programs"
          />{" "}
          Programs
        </li>
        <li>
          <img src="/img/windows/Folder.ico" alt="Documents" /> Documents
        </li>
        <li>
          <img src="/img/windows/Settings.ico" alt="Settings" /> Settings
        </li>
        <li>
          <img
            src="/img/windows/Searchinsheet(16x16px&24x24px).ico"
            alt="Find"
          />{" "}
          Find
        </li>
        <li>
          <img src="/img/windows/Helpbook.ico" alt="Help" /> Help
        </li>
        <li>
          <img src="/img/windows/Programwait.ico" alt="Run" /> Run...
        </li>
        <li>
          <img
            src="/img/windows/TurnOffComputer(displayonly).ico"
            alt="Shutdown"
          />
          Shutdown
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
