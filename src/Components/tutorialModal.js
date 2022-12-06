//* styling imports
import { motion } from "framer-motion";
import "./Styling/tutorialModal.css";
import React from "react";

import Video from "./Tutorial_Video/Temp_Video.mp4";

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

const TutorialModal = ({ handleClose }) => {
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
      <div data-testid="TM1" className="tutorialBox1">
        <div className="tutorialBox2">
          <div className="close">
            <button onClick={handleClose}>X</button>
          </div>

          {/* //* video elements used to call tutorial imports  */}
          <h1 data-testid="TM2">Tutorials</h1>
          <div className="tutorialBox3">
            <div className="tutorialBox4">
              {/* //* Tutorial 1  */}
              <div className="template">
                <video
                  data-testid="TM3"
                  controls
                  src={Video}
                  title="test"
                  type="Temp_Video/mp4"
                />
                <span data-testid="TM4">video name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default TutorialModal;