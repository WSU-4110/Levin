import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Canvas from "./Pages/canvas.js";
import Settings from "./Pages/settings.js";
import PrivacyPolicy from "./Pages/privacypol.js";
import TermsAndConditions from "./Pages/terms&con.js";
import ResetPassword from "./Pages/resetPass";

// use KonvaReactTest instead of Canvas to render Konva canvas
// import KonvaReactTest from "./Pages/konva_react_test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Canvas />}></Route>
        {/* <Route path="/" element={<KonvaReactTest />}></Route> */}
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
