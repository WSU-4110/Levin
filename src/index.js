import { rootShouldForwardProp } from "@mui/material/styles/styled.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AuthProvider } from "./Backend/AuthProvider";
import TestApp from "./Components/testApp.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <AuthProvider>
    <TestApp/>
  </AuthProvider>
</React.StrictMode>)