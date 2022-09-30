import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportSharpIcon from "@mui/icons-material/SupportSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import CopyrightIcon from "@mui/icons-material/Copyright";
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
              <div className="pages Levin">
                <Content icon={<AccountTreeIcon />} />
                <div className="tab zero">
                  <div>Levin</div>
                </div>
              </div>
              <Link className="pages Canvas" to="/">
                <Content icon={<TableChartIcon />} name="Canvas" />
                <div className="tab one">
                  <div>Canvas</div>
                </div>
              </Link>
              <Link className="pages Tutorial" to="/Tutorial">
                <Content icon={<SupportSharpIcon />} name="Tutorial" />
                <div className="tab two">
                  <div>Tutorial</div>
                </div>
              </Link>
              <Link className="pages Settings" to="/Settings">
                <Content icon={<SettingsSharpIcon />} name="Settings" />
                <div className="tab three">
                  <div>Settings</div>
                </div>
              </Link>
              <Link className="pages Login" to="/Login">
                <Content icon={<LoginSharpIcon />} name="Log In" />
                <div className="tab four">
                  <div>Log In</div>
                </div>
              </Link>
              <div>
                <Line color="Black" />
              </div>
              <Link className="pages PrivacyPolicy" to="/PrivacyPolicy">
                <Content icon={<PrivacyTipIcon />} name="Privacy Policy" />
                <div className="tab five">
                  <div>Privacy Policy</div>
                </div>
              </Link>
              <Link
                className="pages TermsAndConditions"
                to="/TermsAndConditions"
              >
                <Content
                  icon={<HomeRepairServiceIcon />}
                  name="Terms of Service"
                />
                <div className="tab six">
                  <div>Terms of Service</div>
                </div>
              </Link>
              <div className="pages Copyright">
                <Content icon={<CopyrightIcon />} />
                <div className="tab seven">
                  <div>© Levin Ltd. 2022</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
