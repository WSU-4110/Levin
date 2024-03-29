import { React, useRef, useState, useEffect, useContext } from "react";

//* styling imports
import { motion } from "framer-motion";
import "./Styling/signupModal.css";
import { Alert } from "@mui/material";

//* backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
//* import { color } from "@mui/system";
//* import { set } from "rsuite/esm/utils/dateUtils";

//* modal visible/ hidden animation
const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SignupModal = ({ handleClose }) => {
  //* authentication context handler
  const { setAuth } = useContext(AuthContext);

  //* to set focus
  const userRef = useRef();
  const errorRef = useRef();
  const passConfirmRef = useRef();

  //* manage input and response states
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successState, setSuccessState] = useState(false);

  //* set focus on page load only (no dependencies)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //* reset error message if username/ pass is changed
  //* (signifying that they read the error message)
  useEffect(() => {
    setErrorMsg("");
  }, [user, pass]);

  //* form submission handler.
  //* event("e") is passed automotically upon submit,
  //* does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pass != passConfirmRef.current.value) {
        setErrorMsg("Passwords do not match!");
        handleClick();
      } else {
        const response = await axios.post(
          "api/registration",
          JSON.stringify({ email: user, password: pass }),
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
        setAuth({ user, pass });
        setUser("");
        setPass("");
        passConfirmRef.current.value = "";
        setSuccessState(true);
      }
    } catch (err) {
      console.dir(err);

      const responseObj = JSON.parse(err.response.request?.response);
      if (!err.response) {
        setErrorMsg("No Response from server");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused!");
      } else if (err.response?.status === 500) {
        //* console.dir(JSON.parse(err.response?.request.response));

        if (responseObj.message.startsWith("Mail server connection failed")) {
          setErrorMsg(
            "Account Registered but Confirmation Email Sending - Failed"
          );
        } else if (responseObj.message == "email already taken") {
          setErrorMsg("Email already registered");
        }

        //* setErrorMsg("Email Already Taken");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized acccess request");
      } else {
        setErrorMsg("Failed to Register");
      }

      handleClick();
      console.log("working");
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
    //* element call const fadeIn
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* //* box outlines can be enabled through the css  */}
      <div data-testid="SM1" className="signupBox1">
        <div className="signupBox2">
          <div className="close">
            <button onClick={handleClose}>➜</button>
          </div>
          <h1 data-testid="SM2">Sign Up</h1>

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

            {/* //* testing */}
            <span style={{ opacity: 0 }} data-testid="error">
              {errorMsg}
            </span>
            <span style={{ opacity: 0 }} data-testid="successState">
              {successState.toString()}
            </span>

            {/* //* input element used to enter email */}
            <div className="inputContainer">
              {/* //* email */}
              <div className="signupInput">
                <input
                  data-testid="SM3"
                  type="email"
                  id="username"
                  required
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <span data-testid="SM4">Email</span>
                <i></i>
              </div>

              {/* //* password */}
              <div className="signupInput">
                <input
                  data-testid="SM5"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
                <span data-testid="SM6">Password</span>
                <i></i>
              </div>

              {/* //* confirm password */}
              <div className="signupInput">
                <input
                  data-testid="SM7"
                  type="password"
                  id="password"
                  required
                  ref={passConfirmRef}
                  //* onChange={(e) => {
                  //*  if (e.target.value !== pass) {
                  //*     passConfirmRef.current.style.border = "2px red";
                  //*   } else {
                  //*     passConfirmRef.current.style.border= "2px white";
                  //*   }}}
                />
                <span data-testid="SM8" id="confirmPass">
                  Confirm Password
                </span>
                <i></i>
              </div>
            </div>

            {/* //* sign up button */}
            <div className="signupButtonContainer">
              <button data-testid="SM9" type="submit">
                <div data-testid="SM10" className="signupButton">
                  Sign Up
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupModal;
