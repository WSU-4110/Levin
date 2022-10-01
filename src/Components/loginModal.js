import { motion } from "framer-motion";
import { React, useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Styling/loginModal.css";

//backend imports
import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";
import { set } from "rsuite/esm/utils/dateUtils";

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
        "/login",
        JSON.stringify({ email: user, password: pass }),
        {
          headers: {
            "Content-Type": "application/json",
            // ,
            // "Access-Control-Allow-Origin": "localhost",
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
      if (!err?.response) {
        setErrorMsg("No Response from server");
      } else if (err.response?.status === 400) {
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
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="modal"
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
            {/* <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"} aria-live="assertive">
              {errorMsg}
            </p> */}
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
            </div>
            <div className="loginButtonContainer">
              <button type="submit" value="Log In">
                <div className="loginButton">Log In</div>
              </button>
            </div>
            <div>
              <Link className="signup" to="/Signup">
                Sign up
              </Link>
              <Link className="forgotPassword" to="/ForgotPassword">
                Forget Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default LoginModal;
