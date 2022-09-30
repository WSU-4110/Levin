import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportSharpIcon from "@mui/icons-material/SupportSharp";
// import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Icons from "./icons.js";
import "./Styling/sidebar.css";

function Sidebar() {
  const Line = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  return (
    <div className="sidebarContainer">
      {/* Sidebar div */}
      <motion.div className="sidebar">
        {/* Content */}
        <div className="content">
          <div>
            <div className="pages Levin">
              <Icons icon={<AccountTreeIcon />} />
              <div className="tab zero">
                <div>Levin</div>
              </div>
            </div>
            <Link className="pages Canvas" to="/">
              <Icons icon={<TableChartIcon />} />
              <div className="tab one">
                <div>Canvas</div>
              </div>
            </Link>
            <Link className="pages Tutorial" to="/Tutorial">
              <Icons icon={<SupportSharpIcon />} />
              <div className="tab two">
                <div>Tutorial</div>
              </div>
            </Link>
            {/* <Link className="pages Settings" to="/Settings">
              <Icons icon={<SettingsSharpIcon />} />
              <div className="tab three">
                <div>Settings</div>
              </div>
            </Link> */}
            <Link className="pages Login" to="/Login">
              <Icons icon={<LoginSharpIcon />} />
              <div className="tab four">
                <div>Log In</div>
              </div>
            </Link>
            <div>
              <Line color="Black" />
            </div>
            <Link className="pages Contact" to="/Contact">
              <Icons icon={<HelpOutlineIcon />} />
              <div className="tab five">
                <div>Contact</div>
              </div>
            </Link>
            <Link className="pages PrivacyPolicy" to="/PrivacyPolicy">
              <Icons icon={<PrivacyTipIcon />} />
              <div className="tab six">
                <div>Privacy Policy</div>
              </div>
            </Link>
            <Link className="pages TermsAndConditions" to="/TermsAndConditions">
              <Icons icon={<HomeRepairServiceIcon />} />
              <div className="tab seven">
                <div>Terms of Service</div>
              </div>
            </Link>
            <div className="pages Copyright">
              <Icons icon={<CopyrightIcon />} />
              <div className="tab eight">
                <div>© Levin Ltd. 2022</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
