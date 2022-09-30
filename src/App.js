import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Canvas from "./Pages/canvas.js";
import Tutorial from "./Pages/tutorial.js";
import Settings from "./Pages/settings.js";
import Login from "./Pages/login.js";
import Signup from "./Pages/signup.js";
import ForgotPassword from "./Pages/forgotpass.js";
import PrivacyPolicy from "./Pages/privacypol.js";
import TermsAndConditions from "./Pages/terms&con.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Canvas />
        </Route>
        <Route exact path="/Tutorial">
          <Tutorial />
        </Route>
        <Route exact path="/Settings">
          <Settings />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/ForgotPassword">
          <ForgotPassword />
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
