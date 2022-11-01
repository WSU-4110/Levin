import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Canvas from "./Pages/canvas.js";
import Settings from "./Pages/settings.js";
import PrivacyPolicy from "./Pages/privacypol.js";
import TermsAndConditions from "./Pages/terms&con.js";
import KonvaReactTest from "./Pages/konva_react_test"; /* Import for KonvaReactTest function */

/* use KonvaReactTest instead of Canvas to render Konva canvas */

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Canvas /> 
        </Route>
        <Route exact path="/Settings">
          <Settings />
        </Route>
        <Route exact path="/PrivacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/TermsAndConditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
