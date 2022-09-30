import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { AuthProvider } from "./Components/backendConnection/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
