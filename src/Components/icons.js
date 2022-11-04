import React from "react";
import { motion } from "framer-motion";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportSharpIcon from "@mui/icons-material/SupportSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CopyrightIcon from "@mui/icons-material/Copyright";
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
      <Icons>
        <Icons icon={<TableChartIcon />} />
        <Icons icon={<SupportSharpIcon />} />
        <Icons icon={<LoginSharpIcon />} />
        <Icons icon={<HelpOutlineIcon />} />
        <Icons icon={<HomeRepairServiceIcon />} />
        <Icons icon={<CopyrightIcon />} />
        </Icons>
      </motion.div>
    </motion.div>
  );
}

export default Icons;
