import React from "react";
import { motion } from "framer-motion";
import "./Styling/icons.css";
import { icons } from "react-icons";

function Icons({ icon }) {
  const {id,title,completed}=Icons;
  const h1=<h1>{title}</h1>
  const text = completed? <strike>{h1}</strike>:h1;
  return <div data-testid="LevinIcons-1">LEVIN-Icons</div>
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
