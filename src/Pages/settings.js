import "./Styling/settings.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Settings() {
  return (
    <div className="settingsContainer">
      <Sidebar />
      <p className="title">Settings</p>
    </div>
  );
}

export default Settings;
