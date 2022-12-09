import { React, useState } from "react";
import { Link } from "react-router-dom";

//* styling imports
import Logo from "./Styling/Images/Logo.png";
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
import PageIcons from "./pageIcons.js";
import TutorialModal from "./tutorialModal.js";
import LoginModal from "./loginModal.js";
import ContactModal from "./contactModal.js";
import "./Styling/sidebar.css";

function Sidebar(props) {
  //* custom line for sidebar
  const Line = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  //* tutorial modal open/ close state
  const [tutorialModalOpen, settutorialModalOpen] = useState(false);
  const tutorialClose = () => settutorialModalOpen(false);
  const tutorialOpen = () => settutorialModalOpen(true);

  //* login modal open/ close state
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const loginClose = () => setloginModalOpen(false);
  const loginOpen = () => setloginModalOpen(true);

  //* contact modal open/ close state
  const [contactModalOpen, setcontactModalOpen] = useState(false);
  const contactClose = () => setcontactModalOpen(false);
  const contactOpen = () => setcontactModalOpen(true);

  const [successState, setSuccessState] = useState("false");

  return (
    <div
      onLoad={() => {
        setSuccessState(props.sucessStateProp);
        console.log(successState);
      }}
    >
      {successState ? (
        <>
          <div className="levinContainer">
            <img className="Logo" src={Logo} />
          </div>
          <div className="sidebarContainer">
            <motion.div
              className="sidebar"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              dragElastic={0.5}
            >
              <div className="content">
                <div>
                  <Link className="pages Canvas" to="/">
                    <PageIcons icon={<TableChartIcon />} />
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
                    <PageIcons icon={<SupportSharpIcon />} />
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
                  <Link className="pages Settings" to="/Settings">
                    <PageIcons icon={<SettingsIcon />} />
                    <div className="tab four">
                      <div>Settings</div>
                    </div>
                  </Link>
                  <Link className="pages Logout">
                    <PageIcons icon={<LogoutIcon />} />
                    <div className="tab five">
                      <div>Log Out</div>
                    </div>
                  </Link>
                  <div>
                    <Line color="Black" />
                  </div>
                  <motion.button
                    className="pages Contact button"
                    onClick={() =>
                      contactModalOpen ? contactClose() : contactOpen()
                    }
                  >
                    <PageIcons icon={<HelpOutlineIcon />} />
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
                    <PageIcons icon={<PrivacyTipIcon />} />
                    <div className="tab seven">
                      <div>Privacy Policy</div>
                    </div>
                  </Link>
                  <Link
                    className="pages TermsAndConditions"
                    to="/TermsAndConditions"
                  >
                    <PageIcons icon={<HomeRepairServiceIcon />} />
                    <div className="tab eight">
                      <div>Terms of Service</div>
                    </div>
                  </Link>
                  <div className="pages Copyright">
                    <PageIcons icon={<CopyrightIcon />} />
                    <div className="tab nine">
                      <div>© Levin Ltd. 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <div text="FOR SUCCESSSTATE LOGGED IN"></div>
          {/* //* Levin logo and title */}
          <div className="levinContainer">
            <img className="Logo" src={Logo} />
          </div>
          <div data-testid="SB1" className="sidebarContainer">
            {/* //* framer motion element to add drag attributes to sidebar */}
            <motion.div
              className="sidebar"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              dragElastic={0.5}
            >
              <div className="content">
                <div>
                  {/* //* canvas */}
                  <Link className="pages Canvas" to="/">
                    <PageIcons icon={<TableChartIcon />} />
                    <div className="tab one">
                      <div>Canvas</div>
                    </div>
                  </Link>

                  {/* //* calling tutorial */}
                  <motion.button
                    className="pages Tutorial button"
                    onClick={() =>
                      tutorialModalOpen ? tutorialClose() : tutorialOpen()
                    }
                  >
                    <PageIcons icon={<SupportSharpIcon />} />
                    <div className="tab two">
                      <div>Tutorials</div>
                    </div>
                  </motion.button>

                  {/* //* animating tutorial */}
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

                  {/* //* calling log in */}
                  <motion.button
                    className="pages Login button"
                    onClick={() =>
                      loginModalOpen ? loginClose() : loginOpen()
                    }
                  >
                    <PageIcons icon={<LoginSharpIcon />} />
                    <div className="tab three">
                      <div>Log In</div>
                    </div>
                  </motion.button>

                  {/* //* animating log in */}
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

                  {/* //* calling line */}
                  <div>
                    <Line color="Black" />
                  </div>

                  {/* //* calling contact */}
                  <motion.button
                    className="pages Contact button"
                    onClick={() =>
                      contactModalOpen ? contactClose() : contactOpen()
                    }
                  >
                    <PageIcons icon={<HelpOutlineIcon />} />
                    <div className="tab six">
                      <div>Contact</div>
                    </div>
                  </motion.button>

                  {/* //* animating contact */}
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

                  {/* //* linking privacy policy */}
                  <Link className="pages PrivacyPolicy" to="/PrivacyPolicy">
                    <PageIcons icon={<PrivacyTipIcon />} />
                    <div className="tab seven">
                      <div>Privacy Policy</div>
                    </div>
                  </Link>

                  {/* //* linking terms of service */}
                  <Link
                    className="pages TermsAndConditions"
                    to="/TermsAndConditions"
                  >
                    <PageIcons icon={<HomeRepairServiceIcon />} />
                    <div className="tab eight">
                      <div>Terms of Service</div>
                    </div>
                  </Link>

                  {/* //* copyright */}
                  <div className="pages Copyright">
                    <PageIcons icon={<CopyrightIcon />} />
                    <div className="tab nine">
                      <div>© Levin Ltd. 2022</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button onClick={save}></button> */}
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
