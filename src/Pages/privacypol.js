import "./Styling/privacypol.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function PrivacyPolicy() {
  return (
    <div className="privacypolContainer">
      <Sidebar />
      <p className="title">Privacy Policy</p>
    </div>
  );
}

export default PrivacyPolicy;
