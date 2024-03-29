import { React, useRef, useState /*useEffect, useContext*/ } from "react";

//* styling imports
import { motion } from "framer-motion";
import "./Styling/forgotModal.css";
import { Alert } from "@mui/material";

//* backend imports
//* import AuthContext from "../Backend/AuthProvider";
import axios from "../Backend/axios";

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

const ForgotModal = ({ handleClose }) => {
  //* authentication context handler
  //* const { setAuth } = useContext(AuthContext);

  //* to set focus
  const userRef = useRef();
  const errorRef = useRef();
  const [user, setUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [, /*successState*/ setSuccessState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "api/RequestReset",
        JSON.stringify({ email: user }),
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
      //* setAuth({ user, pass });
      setUser("");
      setSuccessState(true);
    } catch (err) {
      console.dir(err);
      const responseObj = JSON.parse(err.response?.request.response);

      if (!err.response) {
        setErrorMsg("No Response from server");
        console.log("invalid credentials");
      } else if (err.code == "ERR_NETWORK") {
        setErrorMsg("Network Connection Refused");
      } else if (err.response?.status === 500) {
        //* console.dir(JSON.parse(err.response?.request.response));
        if (responseObj.message.startsWith("Mail server connection failed")) {
          setErrorMsg("Mail Server Rejected - Reset Email Failed");
        } else if (responseObj.message == "email not valid") {
          setErrorMsg("No account with this email found");
        }
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized Acccess Request");
      } else {
        setErrorMsg("Failed to Send Reset");
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
    //* element call const fadeIn
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* //* box outlines can be enabled through the css  */}
      <div data-testid="FM1" className="forgotpassBox1">
        <div className="forgotpassBox2">
          <div className="close">
            <button onClick={handleClose}>➜</button>
          </div>
          <h1 data-testid="FM2">Forgot Password</h1>

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

            {/* //* input element used to enter email */}
            <div className="inputContainer">
              <div className="forgotpassInput">
                <input
                  data-testid="FM3"
                  type="email"
                  id="username"
                  required
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <span data-testid="FM4">Email</span>
                <i></i>
              </div>
            </div>

            {/* //* send button */}
            <div className="forgotpassButtonContainer">
              <button data-testid="FM5" type="submit" value="Log In">
                <div className="forgotpassButton" data-testid="FM6">
                  Send
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotModal;
