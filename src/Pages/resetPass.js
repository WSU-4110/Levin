import { React, useRef, useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

//styling imports
import "./Styling/resetPass.css";
import Sidebar from "../Components/sidebar.js";
import { Alert } from "@mui/material";

//backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
// import { set } from "rsuite/esm/utils/dateUtils";

const ResetPassword = (props) => {
  const { setAuth } = useContext(AuthContext);
  const errorRef = useRef();
  const passConfirmRef = useRef();

  //manage input and response states
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //manage url token
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token"));

  // console.log(token);

  //reset error message if username/pass is changed(signifying that they read the error message)
  useEffect(() => {
    setErrorMsg("");
  }, [pass]);

  //form submission handler.
  //event("e") is passed automotically upon submit, does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pass != passConfirmRef.current.value) {
        setErrorMsg("Passwords do not match!");
      } else {
        const response = await axios.post(
          "api/ResetPassword",
          JSON.stringify({ token: token, password: pass }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
            },
          }
        );

        console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response));

        // errorRef.current.severity = "success";
        // console.log( errorRef.current.severity);
        // setErrorMsg("Registration Successfull!");
        setAuth({ pass });

        setPass("");
        passConfirmRef.current.value = "";
      }
    } catch (err) {
      console.dir(err);
      if (!err.response) {
        setErrorMsg("No Response from server");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused!");
      } else if (err.response?.status === 500) {
        setErrorMsg("Password Already Taken");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized acccess request");
      } else {
        setErrorMsg("Failed to Reset");
      }

      handleClick();
      errorRef.current.focus();
    }
  };

  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setIsShown(true);
    }, 0);
    setTimeout(() => {
      setIsShown(false);
    }, 10000);
  };

  return (
    <div>
      <Sidebar />
      <div className="resetContainer">
        <div className="resetBox1">
          <div className="resetBox2">
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
              {isShown && (
                <div className="errorSpaceContainer">
                  <div className="errorSpace">
                    <Alert
                      ref={errorRef}
                      className="errorMessage"
                      severity="error"
                    >
                      {errorMsg}
                    </Alert>
                  </div>
                </div>
              )}
              <div className="inputContainer">
                <div className="resetInput">
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
                <div className="resetInput">
                  <input
                    type="password"
                    id="confirmpassword"
                    required
                    ref={passConfirmRef}
                    // onChange={(e) => {
                    //   if (e.target.value !== pass) {
                    //     passConfirmRef.current.style.border = "2px red";
                    //   } else {
                    //     passConfirmRef.current.style.border= "2px white";
                    //   }
                    // }}
                  />
                  <span id="confirmPass">Confirm Password</span>
                  <i></i>
                </div>
              </div>
              <div className="resetButtonContainer">
                <button type="submit">
                  <div className="resetButton">
                    Reset Password
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
