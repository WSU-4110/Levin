import { React, useRef, useState, useEffect, useContext } from "react";

//styling imports
import "./Styling/loginModal.css";
import { Alert } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./signupModal.js";
import ForgotModal from "./forgotModal.js";

//backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
// import { set } from "rsuite/esm/utils/dateUtils";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const LoginModal = ({ handleClose }) => {
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

  const [signupModalOpen, setsignupModalOpen] = useState(false);
  const signupClose = () => setsignupModalOpen(false);
  const signupOpen = () => setsignupModalOpen(true);

  const [forgotModalOpen, setforgotpModalOpen] = useState(false);
  const forgotClose = () => setforgotpModalOpen(false);
  const forgotOpen = () => setforgotpModalOpen(true);

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
      const response = await axios.post(
        "login",
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

      setAuth({ user, pass });
      setUser("");
      setPass("");
      setSuccessState(true);
    } catch (err) {
      console.dir(err);
      if (!err.response) {
        setErrorMsg("No Response from server");
        console.log("invalid login credentials");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused");
      } else if (err.response?.status === 500) {
        setErrorMsg("Invalid Email/Password");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized Acccess Request");
      } else {
        setErrorMsg("Failed to Login");
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
    //Fragment where view is based on successState of form(logged in/logged out)
    <>
      {successState ? ( //logged in state
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="loginBox1">
            <div className="loginBox2">
              <div className="close">
                <button onClick={handleClose}>X</button>
              </div>
              <h1>Log In Successful</h1>
              <h5>Please return to home page.</h5>
            </div>
          </div>
        </motion.div>
      ) : (
        //logged out state
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="loginBox1">
            <div className="loginBox2">
              <div className="close">
                <button onClick={handleClose}>X</button>
              </div>
              <h1>Log In</h1>
              <form onSubmit={handleSubmit}>
                {isShown && (
                  <div className="errorSpaceContainer">
                    <div className="errorSpace">
                      {/* //logged out state */}
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
                  <div className="loginInput">
                    <input
                      type="text"
                      id="username"
                      required
                      ref={userRef}
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                    />
                    <span>Email</span>
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
                </div>
                <div className="loginButtonContainer">
                  <button type="submit" value="Log In">
                    <div className="loginButton">
                      Log In
                    </div>
                  </button>
                </div>
              </form>
              <div className="otherModals">
                <motion.button
                  onClick={() =>
                    signupModalOpen ? signupClose() : signupOpen()
                  }
                >
                  <p className="signup">Sign up</p>
                </motion.button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {signupModalOpen && (
                    <SignupModal
                      signupModalOpen={signupModalOpen}
                      handleClose={signupClose}
                    />
                  )}
                </AnimatePresence>
                <motion.button
                  onClick={() =>
                    forgotModalOpen ? forgotClose() : forgotOpen()
                  }
                >
                  <p className="forgotPassword">Forgot Password</p>
                </motion.button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {forgotModalOpen && (
                    <ForgotModal
                      forgotModalOpen={forgotModalOpen}
                      handleClose={forgotClose}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LoginModal;
