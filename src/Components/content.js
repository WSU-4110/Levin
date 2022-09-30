import React from "react";
import { motion } from "framer-motion";
import "./Styling/content.css";

function Content({ icon, name }) {
  const pages = {
    true: {
      opacity: 0,
      display: "none",
    },
    false: {
      opacity: 1,
      display: "flex",
    },
  };

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
      <motion.span className="names" variants={pages}>
        {name}
      </motion.span>
    </motion.div>
  );
}

export default Content;
