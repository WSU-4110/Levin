import { React, useState } from "react";
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
  const [successState, setSuccessState] = useState("false");
  const [errorMessage, setErrorMsg] = useState("");

  const authorize = async (/*e*/) => {
    try {
      const access_token = localStorage.getItem("access_token");
      console.log("token: " + access_token);

      const response = await axios.get("authenticate/authenticateAccessToken", {
        params: { token: access_token },
        headers: {
          // "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          Authorization: "Bearer " + access_token,
        },
      });

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      setSuccessState("true");
      // console.log(successState);
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

      console.log(errorMessage);
    }
  };

  return (
    <div onLoad={authorize}>
      <Router>
        <Routes>
          <Route path="/" element={<Canvas sucessStateProp={successState} />} />
          <Route path="Settings" element={<Settings />}></Route>
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route
            path="TermsAndConditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="ResetPassword/*" element={<ResetPassword />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
