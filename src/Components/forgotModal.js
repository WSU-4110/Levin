import { motion } from "framer-motion";
import "./Styling/forgotModal.css";

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
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="forgotpassBox1">
        <div className="forgotpassBox2">
          <div className="close">
            <button onClick={handleClose}>X</button>
          </div>
          <h1>Forgot Password</h1>
          <div className="inputContainer">
            <div className="forgotpassInput">
              <input type="text" required="required"></input>
              <span>Email</span>
              <i></i>
            </div>
          </div>
          <div className="forgotpassButtonContainer">
            <button type="submit" value="Log In">
              <div className="forgotpassButton">Send</div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotModal;
