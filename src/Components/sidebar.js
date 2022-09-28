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
    true: {},
    false: { width: "15rem" },
  };

  const sidebarVariants = {
    true: { width: "5rem" },
    false: {},
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
        variants={sidebarVariants}
        initial={`${open}`}
        animate={`${open}`}
      >
        {/* Sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={containerVariants}
        >
          {/* Hamburger Menu */}
          <motion.div
            whileHover={{
              rotate: 180,
              cursor: "pointer",
              transition: {
                duration: 0.5,
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
                  opacity: open ? 0 : 1,
                  display: open ? "none" : "flex",
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
                  opacity: open ? 0 : 1,
                  display: open ? "none" : "flex",
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
