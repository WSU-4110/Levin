import { motion } from "framer-motion";
import "./Styling/tutorialModal.css";

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
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="testcontactBox1">
        <div className="testcontactBox2">
          <div className="close">
            <button onClick={handleClose}>X</button>
          </div>
          <h1>Tutorial</h1>
        </div>
      </div>
    </motion.div>
  );
};
export default TutorialModal;
