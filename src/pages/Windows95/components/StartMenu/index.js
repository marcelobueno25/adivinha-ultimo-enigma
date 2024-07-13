import React from "react";
import "./styles.scss";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">Windows 95</div>
      <ul>
        <li>
          <img src="/icons/programs.png" alt="Programs" /> Programs
        </li>
        <li>
          <img src="/icons/documents.png" alt="Documents" /> Documents
        </li>
        <li>
          <img src="/icons/settings.png" alt="Settings" /> Settings
        </li>
        <li>
          <img src="/icons/find.png" alt="Find" /> Find
        </li>
        <li>
          <img src="/icons/help.png" alt="Help" /> Help
        </li>
        <li>
          <img src="/icons/run.png" alt="Run" /> Run...
        </li>
        <li>
          <img src="/icons/shutdown.png" alt="Shutdown" /> Shutdown
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
