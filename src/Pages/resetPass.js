import { React, useRef, useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

//* styling imports
import "./Styling/resetPass.css";
import Sidebar from "../Components/sidebar.js";
import { Alert } from "@mui/material";

//* backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
//* import { set } from "rsuite/esm/utils/dateUtils";

const ResetPassword = (props) => {
  const { setAuth } = useContext(AuthContext);
  const errorRef = useRef();
  const passConfirmRef = useRef();

  //* manage input and response states
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //* manage url token
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token"));
  //*  console.log(token);

  //* reset error message if username/pass is changed
  //* (signifying that they read the error message)
  useEffect(() => {
    setErrorMsg("");
  }, [pass]);

  //* form submission handler.
  //* event("e") is passed automotically upon submit,
  //* does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pass != passConfirmRef.current.value) {
        setErrorMsg("Passwords do not match!");
      } else {
        const response = await axios.post(
          "ResetPassword",
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
        //* console.log(JSON.stringify(response));
        //* errorRef.current.severity = "success";
        //* console.log( errorRef.current.severity);
        //* setErrorMsg("Registration Successfull!");
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

  //* err response visible/ hidden animation
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
      {/* //* box outlines can be enabled through the css  */}
      <div data-testid="RP1" className="resetContainer">
        <div className="resetBox1">
          <div className="resetBox2">
            <h1 data-testid="RP2">Reset Password</h1>

            {/* //* form element calling handleSubmit */}
            {/* //* alert element calling errorRef to prompt error */}
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

              {/* //* input element used to enter new password */}
              <div className="inputContainer">
                {/* //* new password */}
                <div className="resetInput">
                  <input
                    data-testid="RP3"
                    type="password"
                    id="password"
                    required
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                  <span data-testid="RP4">Password</span>
                  <i></i>
                </div>

                {/* //* confirm new password */}
                <div className="resetInput">
                  <input
                    data-testid="RP5"
                    type="password"
                    id="confirmpassword"
                    required
                    ref={passConfirmRef}
                    //* onChange={(e) => {
                    //*   if (e.target.value !== pass) {
                    //*     passConfirmRef.current.style.border = "2px red";
                    //*   } else {
                    //*     passConfirmRef.current.style.border= "2px white";
                    //*   }}}
                  />
                  <span data-testid="RP6" id="confirmPass">
                    Confirm Password
                  </span>
                  <i></i>
                </div>
              </div>

              {/* //* reset password button */}
              <div className="resetButtonContainer">
                <button data-testid="RP7" type="submit">
                  <div data-testid="RP8" className="resetButton">
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
