import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AuthProvider } from "./Backend/AuthProvider";
import Board from "./Components/testBoard.js";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//  <Board knightPosition={[0,0]} />,
//  document.getElementById("root")
// );
