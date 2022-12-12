//* styling imports
import { motion } from "framer-motion";
import "./Styling/tutorialModal.css";
import React from "react";

import Video1 from "./Tutorial_Video/Tutorial_Show.mp4";
import Video2 from "./Tutorial_Video/Drag_Back_&_Cont.mp4";
import Video3 from "./Tutorial_Video/Manip_Cont.mp4";
import Video4 from "./Tutorial_Video/Down_Site_Image.mp4";

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
              {/* //* Tutorial Modal Showcase  */}
              <div className="template">
                <video
                  data-testid="TM3"
                  controls
                  src={Video1}
                  title="Tutorial Modal Showcase"
                />
                <span data-testid="TM4">Tutorial Modal Showcase</span>
              </div>
              <br />

              {/* //* Drag Background and Containers  */}
              <div className="template">
                <video
                  data-testid="TM5"
                  controls
                  src={Video2}
                  title="Drag Background and Containers"
                />
                <span data-testid="TM6">Drag Background and Containers</span>
              </div>
              <br />

              {/* //* Manipulating Containers  */}
              <div className="template">
                <video
                  data-testid="TM7"
                  controls
                  src={Video3}
                  title="Manipulating Containers"
                />
                <span data-testid="TM8">Manipulating Containers</span>
              </div>
              <br />

              {/* //* Download Sitemap as an Image  */}
              <div className="template">
                <video
                  data-testid="TM9"
                  controls
                  src={Video4}
                  title="Download Sitemap as an Image"
                />
                <span data-testid="TM10">Download Sitemap as an Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorialModal;
