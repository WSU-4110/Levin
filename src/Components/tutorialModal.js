import { motion } from "framer-motion";
import "./Styling/tutorialModal.css";
import React from "react";

// Temp Video Example
import Video from "./Tutorial_Video/Temp_Video.mp4";


var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

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
          <h1>Tutorials</h1>
          <div className="testcontactBox3">
            <div className="testcontactBox4">
              <div className="template1">
                <video controls src={Video} type="Temp_Video/mp4" />
              </div>
              <div className="template2">
                <video controls src={Video} type="Temp_Video/mp4" />
              </div>
              <div className="template3">
                <video controls src={Video} type="Temp_Video/mp4" />
              </div>
              <div className="template4">
                <video controls src={Video} type="Temp_Video/mp4" />
              </div>
              <div className="template5"></div>
              <div className="template6"></div>
              <div className="template7"></div>
              <div className="template8"></div>
              <div className="template9"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default TutorialModal;
