import { React, useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//styling imports
import "./Styling/login.css";
import Sidebar from "../Components/sidebar.js";
import { Alert } from "@mui/material";

//backend imports
import AuthContext from "../Components/backendConnection/AuthProvider";
import axios from "../Components/backendConnection/axios";
import { set } from "rsuite/esm/utils/dateUtils";

function Login() {
  //authentication context handler
  const { setAuth } = useContext(AuthContext);

  //to set focus
  const userRef = useRef();
  const errorRef = useRef();

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
        "login",
        JSON.stringify({ email: user, password: pass }),
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
        console.log("invalid login credentials");
      } else if(err.code == "ERR_NETWORK"){
          setErrorMsg("Network Connection Refused!")
      } else if (err.response?.status === 500) {
        setErrorMsg("Invalid Email/Pass input");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized acccess request");
      } else {
        setErrorMsg("Failed to Login");
      }
      errorRef.current.focus();
    }
  };

  return (
    //Fragment where view is based on successState of form(logged in/logged out)
    <>
      {successState ? ( //logged in state
        <div>
          <h1>Logged In</h1>
          <p>Return to Home: </p>

          {/* //insert Link to home here */}
        </div>
      ) : (
        //logged out state
        <div>
          <Sidebar />
          <div className="loginContainer">
            <div className="loginBox1">
              <div className="loginBox2">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                  <div className="errorSpace">
                    <Alert
                      ref={errorRef}
                      className="errorMessage"
                      severity="error"
                    >
                      {errorMsg}
                    </Alert>
                  </div>

                  <div className="loginInput">
                    <input
                      type="text"
                      id="username"
                      required
                      ref={userRef}
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                    />
                    <span>Username</span>
                    <i></i>
                  </div>
                  <div className="loginInput">
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
                  <button type="submit" value="Log In">
                    Log In
                  </button>
                  <div>
                    <Link className="forgotPassword" to="/ForgotPassword">
                      Forget Password
                    </Link>
                    <Link className="signup" to="/Signup">
                      Sign up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
