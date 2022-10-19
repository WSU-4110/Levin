import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AuthProvider } from "./Backend/AuthProvider.js";
//import Board from "./Components/TEST_COMPONENTS/testBoard.js";
//import {observe} from "./Components/TEST_COMPONENTS/testGame.js"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
); 


 /* const root = document.getElementById('root')

 observe((knightPosition) =>
  ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Board knightPosition={knightPosition}>
        <App />
      </Board>
    </AuthProvider>
  </React.StrictMode>
  , root)
 ) */
