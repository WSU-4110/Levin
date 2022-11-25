import "./Styling/settings.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Settings() {
  const {id,title,completed}=Settings;
  const h1=<h1>{title}</h1>
  const text = completed? <strike>{h1}</strike>:h1;
  return <div data-testid="LevinSettings-1">LEVIN SETTINGS</div>
  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="titleContainer">
        <p className="title">Settings</p>
      </div>
    </div>
  );
}

export default Settings;
