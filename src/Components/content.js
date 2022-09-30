import React from "react";
import { motion } from "framer-motion";
import "./Styling/content.css";

function Content({ icon, name }) {
  const pages = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <motion.div
      className="page_hover"
      whileHover={{
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
        width: 500,
      }}
      transition={{
        type: "none",
        duration: 0.1,
      }}
    >
      <motion.div
        whileHover={{
          rotate: 360,
          cursor: "pointer",
          transition: {
            duration: 0.75,
          },
        }}
        className="icons"
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
