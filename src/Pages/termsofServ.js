import "./Styling/termsofServ.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function TermsOfService() {
  return (
    <div className="termsofServContainer">
      <Sidebar />
      <p className="title">Terms Of Service</p>
    </div>
  );
}

export default TermsOfService;
