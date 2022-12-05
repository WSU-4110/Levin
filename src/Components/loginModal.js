import { React, useRef, useState, useEffect, useContext } from "react";

//* styling imports
import "./Styling/loginModal.css";
import { Alert } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./signupModal.js";
import ForgotModal from "./forgotModal.js";

//* backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
//* import { set } from "rsuite/esm/utils/dateUtils";

//* modal visible/ exit animation
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
  //* authentication context handler
  const { setAuth } = useContext(AuthContext);

  //* to set focus
  const userRef = useRef();
  const errorRef = useRef();

  //* manage input and response states
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

  //* set focus on page load only (no dependencies)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //* reset error message if username/ pass is changed
  //* (signifying that they read the error message)
  useEffect(() => {
    setErrorMsg("Failed to Login");
  }, [user, pass]);

  //* form submission handler.
  //* event("e") is passed automotically upon submit,
  //* does not need to be specified in argument
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "api/login",
        JSON.stringify({ email: user, password: pass }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );

      console.log(response);
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
    //* fragment where view is based on successState of form
    //* (logged in/ logged out)
    <>
      {/* //* logged in state
      //* this state is not visible when logged in, this successState
      //* is set up in case the sidebar successState is not working
      //* element call const dropIn */}
      {successState ? (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div data-testid="LM1" className="loginBox1">
            <div className="loginBox2">
              <div className="close">
                <button onClick={handleClose}>X</button>
              </div>
              <h1 data-testid="LM2">Log In Successful</h1>
            </div>
          </div>
        </motion.div>
      ) : (
        //* logged out state
        //* element call const dropIn
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* //* box outlines can be enabled through the css  */}
          <div data-testid="LM3" className="loginBox1">
            <div className="loginBox2">
              <div className="close">
                <button onClick={handleClose}>X</button>
              </div>
              <h1 data-testid="LM4">Log In</h1>

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

                {/* //* input elements used to enter new email */}
                <div className="inputContainer">
                  {/* //* email */}
                  <div className="loginInput">
                    <input
                      data-testid="LM5"
                      type="text"
                      id="username"
                      required
                      ref={userRef}
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                    />
                    <span data-testid="LM6">Email</span>
                    <i></i>
                  </div>

                  {/* //* password */}
                  <div className="loginInput">
                    <input
                      data-testid="LM7"
                      type="password"
                      id="password"
                      required
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                    />
                    <span data-testid="LM8">Password</span>
                    <i></i>
                  </div>
                </div>

                {/* //* login button */}
                <div className="loginButtonContainer">
                  <button data-testid="LM9" type="submit" value="Log In">
                    <div data-testid="LM10" className="loginButton">
                      Log In
                    </div>
                  </button>
                </div>
              </form>

              <div className="otherModals">
                {/* //* calling signupModal */}
                <motion.button
                  data-testid="LM11"
                  onClick={() =>
                    signupModalOpen ? signupClose() : signupOpen()
                  }
                >
                  <p data-testid="LM12" className="signup">
                    Sign up
                  </p>
                </motion.button>

                {/* //* animating signupModal */}
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

                {/* //* calling forgotModal */}
                <motion.button
                  data-testid="LM13"
                  onClick={() =>
                    forgotModalOpen ? forgotClose() : forgotOpen()
                  }
                >
                  <p data-testid="LM14" className="forgotPassword">
                    Forgot Password
                  </p>
                </motion.button>

                {/* //* animating forgotModal */}
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
