//* styling imports
import React from "react";
import { motion } from "framer-motion";
import "./Styling/icons.css";

//* Icons function is called multiple times in sidebar.js
//* Used to make icons animate when hovering over them
function Icons({ icon }) {
  return (
    //* framer motion element to animate content
    <motion.div className="page_hover">
      <motion.div
        data-testid="I1"
        className="icons"
        whileHover={{
          rotate: 360,
          cursor: "pointer",
          transition: {
            duration: 1,
          },
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

export default Icons;
