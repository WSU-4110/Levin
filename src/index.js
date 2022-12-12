import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AuthProvider } from "./Backend/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
