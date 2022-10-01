import { React, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import TutorialModal from "./tutorialModal.js";
import LoginModal from "./loginModal.js";
import ContactModal from "./contactModal.js";
import "./Styling/sidebar.css";

function Sidebar() {
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
      <div className="sidebarContainer">
        {/* Sidebar div */}
        <motion.div
          className="sidebar"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
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
              <motion.button
                className="pages Tutorial button"
                onClick={() =>
                  tutorialModalOpen ? tutorialClose() : tutorialOpen()
                }
              >
                <Icons icon={<SupportSharpIcon />} />
                <div className="tab two">
                  <div>Tutorial</div>
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
              {/* <Link className="pages Settings" to="/Settings">
              <Icons icon={<SettingsSharpIcon />} />
              <div className="tab three">
                <div>Settings</div>
              </div>
            </Link> */}
              <motion.button
                className="pages Login button"
                onClick={() => (loginModalOpen ? loginClose() : loginOpen())}
              >
                <Icons icon={<LoginSharpIcon />} />
                <div className="tab four">
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
                <div className="tab five">
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
                <div className="tab six">
                  <div>Privacy Policy</div>
                </div>
              </Link>
              <Link
                className="pages TermsAndConditions"
                to="/TermsAndConditions"
              >
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
    </div>
  );
}

export default Sidebar;
