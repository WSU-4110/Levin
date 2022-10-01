import { motion } from "framer-motion";
import Backdrop from "./backdrop.js";
import { Link } from "react-router-dom";
import "./Styling/signupModal.css";

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

const TutorialModal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="signupBox1">
          <div className="signupBox2">
            <div className="close">
              <button onClick={handleClose}>X</button>
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
            <div className="close">
              <input type="submit" value="Sign Up"></input>
            </div>
            <div>
              <Link className="login" to="/Login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default TutorialModal;
