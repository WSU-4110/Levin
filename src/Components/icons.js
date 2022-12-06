import React from "react";
import { motion } from "framer-motion";
import "./Styling/icons.css";

function Icons({ icon }) {
  return (
    <motion.div className="page_hover">
      <motion.div
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
