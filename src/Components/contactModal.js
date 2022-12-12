import { /*react,*/ useRef } from "react";

//* styling imports
import { motion } from "framer-motion";
import "./Styling/contactModal.css";

//* backend imports
import emailjs from "emailjs-com";

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

//! add backend comment
const ContactModal = ({ handleClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_levin",
        "template_levin",
        form.current,
        "e9hRhCRnPOXM4i_6_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    //* element call const dropIn
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* //* box outlines can be enabled through the css  */}
      <div data-testid="CM1" className="contactBox1">
        <div className="contactBox2">
          <div className="close">
            <button onClick={handleClose}>X</button>
          </div>

          {/* //* form element calling sendEmail to send emails */}
          {/* //* input elements used to enter information */}
          <form ref={form} onSubmit={sendEmail}>
            <h1 data-testid="CM2">Contact</h1>
            <div className="inputContainer">
              {/* //* email input */}
              <div className="contactInput">
                <input
                  data-testid="CM3"
                  type="text"
                  required="required"
                  name="email"
                ></input>
                <span data-testid="CM4">Email</span>
                <i></i>
              </div>

              {/* //* subject input */}
              <div className="contactInput">
                <input
                  data-testid="CM5"
                  type="text"
                  required="required"
                  name="Subject"
                ></input>
                <span data-testid="CM6">Subject</span>
                <i></i>
              </div>

              {/* //* description input */}
              <div className="contactInput">
                <input
                  data-testid="CM7"
                  type="text"
                  required="required"
                  name="message"
                ></input>
                <span data-testid="CM8">Description</span>
                <i></i>
              </div>
            </div>

            {/* //* send button */}
            <div className="contactButtonContainer">
              <button data-testid="CM9" type="submit" value="Send">
                <div data-testid="CM10" className="contactButton">
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
export default ContactModal;
