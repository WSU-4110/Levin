import { React, useRef, useState, useEffect, useContext } from "react";

//styling imports
import { motion } from "framer-motion";
import "./Styling/signupModal.css";
import { Alert } from "@mui/material";

//backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
import { color } from "@mui/system";
// import { set } from "rsuite/esm/utils/dateUtils";

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
    setErrorMsg("Failed to Login");
  }, [user, pass]);

  //form submission handler.
  //event("e") is passed automotically upon submit, does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pass != passConfirmRef.current.value) {
        setErrorMsg("Passwords do not match!");
      } else {
        const response = await axios.post(
          "registration",
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
        // console.log(JSON.stringify(response));

        // errorRef.current.severity = "success";
        // console.log( errorRef.current.severity);
        // setErrorMsg("Registration Successfull!");
        setAuth({ user, pass });
        setUser("");
        setPass("");
        passConfirmRef.current.value = "";
        setSuccessState(true);
      }
    } catch (err) {
      console.dir(err);
      const responseObj = JSON.parse(err.response?.request.response);
      if (!err.response) {
        setErrorMsg("No Response from server");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused!");
      } else if (err.response?.status === 500) {
        // console.dir(JSON.parse(err.response?.request.response));
        if(responseObj.message.startsWith("Mail server connection failed"))
        {
            setErrorMsg("Account Registered but Confirmation Email Sending - Failed");
        }
        else if(responseObj.message  == "email already taken")
        {
            setErrorMsg("Email already registered");
        }
        // setErrorMsg("Email Already Taken");setErrorMsg("Email Already Taken");
      } else if (err.response?.status === 401) {
         setErrorMsg("Unauthorized acccess request");
      } else {
        setErrorMsg("Failed to Register");
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
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="signupBox1">
        <div className="signupBox2">
          <div className="close">
            <button onClick={handleClose}>➜</button>
          </div>
          <h1>Sign Up</h1>
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
            <div className="signupButtonContainer">
              <button type="submit">
                <div className="signupButton">
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
