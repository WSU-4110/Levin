import {React, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Canvas from "./Pages/canvas.js";
import Settings from "./Pages/settings.js";
import PrivacyPolicy from "./Pages/privacypol.js";
import TermsAndConditions from "./Pages/terms&con.js";
import ResetPassword from "./Pages/resetPass";

import axios from "./Backend/axios";

function App() {

  const [successState, setSuccessState] = useState("");
  const [errorMessage, setErrorMsg] = useState("");
  const authorize = async (e) => {

    try {
      const response = await axios.get(
        "authorize",
        JSON.stringify({ token: "", email: ""}),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      setSuccessState("true");
    } catch (err) {
      console.dir(err);
      if (!err.response) {
        setErrorMsg("No Response from server");
        
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused");
      } else if (err.response?.status === 500) {
        setErrorMsg("Invalid Token");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized Acccess Request");
      } else {
        setErrorMsg("Failed to Authorize");
      }

    }
  };

  return (
    <Router onLoad = {authorize}>
      <Routes>
        <Route path="/" element={<Canvas sucessStateProp = {successState} />} />
        <Route path="Settings" element={<Settings />}></Route>
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        <Route
          path="TermsAndConditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="ResetPassword/*" element={<ResetPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
