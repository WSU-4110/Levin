import { motion } from "framer-motion";
import "./Styling/signupModal.css";

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
          <div className="inputContainer">
            <div className="signupInput">
              <input type="text" required="required"></input>
              <span>Email</span>
              <i></i>
            </div>
            <div className="signupInput">
              <input type="password" required="required"></input>
              <span>Password</span>
              <i></i>
            </div>
            <div className="signupInput">
              <input type="password" required="required"></input>
              <span>Confirm Password</span>
              <i></i>
            </div>
          </div>
          <div className="signupButtonContainer">
            <button type="submit" value="Log In">
              <div className="signupButton">Sign Up</div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupModal;
