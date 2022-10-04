import { motion } from "framer-motion";
import "./Styling/contactModal.css";

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

const ContactModal = ({ handleClose }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="contactBox1">
        <div className="contactBox2">
          <div className="close">
            <button onClick={handleClose}>X</button>
          </div>
          <h1>Contact</h1>
          <div className="inputContainer">
            <div className="contactInput">
              <input type="text" required="required"></input>
              <span>Email</span>
              <i></i>
            </div>
            <div className="contactInput">
              <input type="text" required="required"></input>
              <span>Subject</span>
              <i></i>
            </div>
            <div className="contactInput">
              <input type="text" required="required"></input>
              <span>Description</span>
              <i></i>
            </div>
          </div>
          <div className="contactButtonContainer">
            <button type="submit" value="Log In">
              <div className="contactButton">Send</div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ContactModal;
