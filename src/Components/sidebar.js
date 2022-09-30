import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportSharpIcon from "@mui/icons-material/SupportSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import Content from "./content.js";
import "./Styling/sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(true);

  // Collpsing the sidebar
  const menuToggle = () => {
    setOpen(!open);
  };

  const containerVariants = {
    true: {
      width: "15rem",
    },
    false: {},
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
    },
  };

  const Line = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  return (
    <div className="sidebarContainer">
      <motion.div
        data-Open={open}
        variants={containerVariants}
        initial={`${open}`}
        animate={`${open}`}
      >
        {/* Sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* Hamburger Menu */}
          <motion.div
            whileHover={{
              rotate: 180,
              cursor: "pointer",
              transition: {
                delay: 0.1,
                duration: 0.3,
              },
            }}
            onClick={menuToggle}
            className="menu"
          >
            <MenuOpenSharpIcon />
          </motion.div>

          {/* Content */}
          <div className="content">
            <div>
              <motion.p
                icon={<TableChartIcon />}
                animate={{
                  opacity: open ? 1 : 0,
                  display: open ? "flex" : "none",
                }}
              >
                <div className="name">Levin</div>
              </motion.p>
            </div>
            <div>
              <Link className="pages" to="/">
                <Content icon={<TableChartIcon />} name="Canvas" />
              </Link>
              <Link className="pages" to="/Tutorial">
                <Content icon={<SupportSharpIcon />} name="Tutorial" />
              </Link>
              <Link className="pages" to="/Settings">
                <Content icon={<SettingsSharpIcon />} name="Settings" />
              </Link>
              <Link className="pages" to="/Login">
                <Content icon={<LoginSharpIcon />} name="Log In" />
              </Link>
              <div>
                <Line color="Black" />
              </div>
              <Link className="pages" to="/PrivacyPolicy">
                <Content icon={<PrivacyTipIcon />} name="Privacy Policy" />
              </Link>
              <Link className="pages" to="/TermsOfService">
                <Content
                  icon={<HomeRepairServiceIcon />}
                  name="Terms of Service"
                />
              </Link>
            </div>
            <div>
              <motion.p
                icon={<TableChartIcon />}
                animate={{
                  opacity: open ? 1 : 0,
                  display: open ? "flex" : "none",
                }}
              >
                <div className="copyright">© Levin Ltd. 2022</div>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
