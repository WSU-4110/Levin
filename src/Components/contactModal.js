import {react, useRef} from 'react';
import { motion } from "framer-motion";
import "./Styling/contactModal.css";
import emailjs from 'emailjs-com';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_levin', 'template_levin', form.current, 'e9hRhCRnPOXM4i_6_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
          <form ref={form} onSubmit={sendEmail}>
          <h1>Contact</h1>
          <div className="inputContainer">
            <div className="contactInput">
              <input type="text" required="required" name="email"></input>
              <span>Email</span>
              <i></i>
            </div>
            <div className="contactInput">
              <input type="text" required="required" name="Subject"></input>
              <span>Subject</span>
              <i></i>
            </div>
            <div className="contactInput">
              <input type="text" required="required" name="message"></input>
              <span>Description</span>
              <i></i>
            </div>
          </div>
          <div className="contactButtonContainer">
            <button type="submit" value="Send">
              <div className="contactButton">Send</div>
            </button>
          </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default ContactModal;
