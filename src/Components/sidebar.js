import { React, useState } from "react";
import Logo from "./Styling/Images/Logo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportSharpIcon from "@mui/icons-material/SupportSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Icons from "./icons.js";
import TutorialModal from "./tutorialModal.js";
import LoginModal from "./loginModal.js";
import ContactModal from "./contactModal.js";
import "./Styling/sidebar.css";

function Sidebar(props) {
  const Line = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  const [tutorialModalOpen, settutorialModalOpen] = useState(false);
  const tutorialClose = () => settutorialModalOpen(false);
  const tutorialOpen = () => settutorialModalOpen(true);

  const [loginModalOpen, setloginModalOpen] = useState(false);
  const loginClose = () => setloginModalOpen(false);
  const loginOpen = () => setloginModalOpen(true);

  const [contactModalOpen, setcontactModalOpen] = useState(false);
  const contactClose = () => setcontactModalOpen(false);
  const contactOpen = () => setcontactModalOpen(true);

  return (
    <div>
      <div className="levinContainer">
        <img className="Logo" src={Logo} />
        <div className="Levin">LΞVIИ</div>
      </div>
      <div className="sidebarContainer">
        {/* Sidebar div */}
        <motion.div
          className="sidebar"
          drag
          dragDirectionLock
          dragConstraints={{ top: 0, right: 0, bottom: 400, left: 0 }}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          dragElastic={0.5}
        >
          {/* Content */}
          <div className="content">
            <div>
              <Link className="pages Canvas" to="/">
                <Icons icon={<TableChartIcon />} />
                <div className="tab one">
                  <div>Canvas</div>
                </div>
              </Link>
              <motion.button
                className="pages Tutorial button"
                onClick={() =>
                  tutorialModalOpen ? tutorialClose() : tutorialOpen()
                }
              >
                <Icons icon={<SupportSharpIcon />} />
                <div className="tab two">
                  <div>Tutorials</div>
                </div>
              </motion.button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {tutorialModalOpen && (
                  <TutorialModal
                    tutorialModalOpen={tutorialModalOpen}
                    handleClose={tutorialClose}
                  />
                )}
              </AnimatePresence>
              <motion.button
                className="pages Login button"
                onClick={() => (loginModalOpen ? loginClose() : loginOpen())}
              >
                <Icons icon={<LoginSharpIcon />} />
                <div className="tab three">
                  <div>Log In</div>
                </div>
              </motion.button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {loginModalOpen && (
                  <LoginModal
                    loginModalOpen={loginModalOpen}
                    handleClose={loginClose}
                  />
                )}
              </AnimatePresence>
              {/* <Link className="pages Settings" to="/Settings">
                <Icons icon={<SettingsIcon />} />
                <div className="tab four">
                  <div>Settings</div>
                </div>
              </Link>
              <Link className="pages Logout">
                <Icons icon={<LogoutIcon />} />
                <div className="tab five">
                  <div>Log Out</div>
                </div>
              </Link> */}
              <div>
                <Line color="Black" />
              </div>
              <motion.button
                className="pages Contact button"
                onClick={() =>
                  contactModalOpen ? contactClose() : contactOpen()
                }
              >
                <Icons icon={<HelpOutlineIcon />} />
                <div className="tab six">
                  <div>Contact</div>
                </div>
              </motion.button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {contactModalOpen && (
                  <ContactModal
                    contactModalOpen={contactModalOpen}
                    handleClose={contactClose}
                  />
                )}
              </AnimatePresence>
              <Link className="pages PrivacyPolicy" to="/PrivacyPolicy">
                <Icons icon={<PrivacyTipIcon />} />
                <div className="tab seven">
                  <div>Privacy Policy</div>
                </div>
              </Link>
              <Link
                className="pages TermsAndConditions"
                to="/TermsAndConditions"
              >
                <Icons icon={<HomeRepairServiceIcon />} />
                <div className="tab eight">
                  <div>Terms of Service</div>
                </div>
              </Link>
              <div className="pages Copyright">
                <Icons icon={<CopyrightIcon />} />
                <div className="tab nine">
                  <div>© Levin Ltd. 2022</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sidebar;
