import { React, useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./Styling/signup.css";
import Sidebar from "../Components/sidebar.js";
import { Alert } from "@mui/material";

//backend imports
import AuthContext from "../Components/backendConnection/AuthProvider";
import axios from "../Components/backendConnection/axios";
import { set } from "rsuite/esm/utils/dateUtils";

function Signup() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errorRef = useRef();
  const passConfirmRef = useRef();

  //manage input and response states
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successState, setSuccessState] = useState(false);

  //set focus on page load only(no dependencies)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //reset error message if username/pass is changed(signifying that they read the error message)
  useEffect(() => {
    setErrorMsg("");
  }, [user, pass]);

  //form submission handler.
  //event("e") is passed automotically upon submit, does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "registration",
        JSON.stringify({ username: user, email: user, password: pass }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
          },
        }
      );

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      setAuth({ user, pass });
      setUser("");
      setPass("");
      setSuccessState(true);
    } catch (err) {
      console.dir(err);
      if (!err.response) {
        setErrorMsg("No Response from server");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused!");
      } else if (err.response?.status === 500) {
         setErrorMsg("Email Already Taken");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized acccess request");
      } else {
        setErrorMsg("Failed to Register");
      }
      errorRef.current.focus();
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="signupContainer">
        <div className="signupBox1">
          <div className="signupBox2">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="errorSpace">
                <Alert ref={errorRef} className="errorMessage" severity="error">
                  {errorMsg}
                </Alert>
              </div>
              <div className="signupInput">
                <input
                  type="email"
                  id="username"
                  required
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <span>Email</span>
                <i></i>
              </div>
              <div className="signupInput">
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className="signupInput">
                <input
                  type="password"
                  id="password"
                  required
                  ref={passConfirmRef}
                  onChange={(e) => {
                    if (e.target.value !== pass) {
                      passConfirmRef.current.style.background = "red";
                    } else {
                      passConfirmRef.current.style.background = "white";
                    }
                  }}
                />
                <span id="confirmPass">Confirm Password</span>
                <i></i>
              </div>
              <button type="submit"> Sign Up</button>
            </form>
            <div>
              <Link className="login" to="/Login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
