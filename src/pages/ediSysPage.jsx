import Navbar from "../components/navbar";
import Footer from "../components/footer";
import crmstyleFrom from "../components/styles/ediSys.module.css";
import styles from "../components/styles/Navbar.module.css";
import ediSys from "../assets/EDI.png";
import { motion,  } from "framer-motion";
import styleF from "../components/styles/footer.module.css";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import edis from "../assets/edis.png";

export default function EdiSysPage() {
  return (
    <div>
      <div>
        <div
          className={`${crmstyleFrom.hero} ${crmstyleFrom.reaya} ${crmstyleFrom.crmSuite} ${styles.reaya}`}
        >
          <Navbar />
          {/* Left Content */}
          <motion.div
            className={crmstyleFrom["hero-content"]}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>eduSIS Family</h3>
            <h4>Student Information System</h4>
            <p>
              Integrated Platform for managing Student Lifecycle. eduSIS
              integrates and collaborates among Students, Academic Staff and
              Operation team. Empowering your edu ecosystem with robust
              analytics and reporting insights.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className={crmstyleFrom["hero-image"]}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={ediSys} alt="Insurance Suite" />
          </motion.div>
        </div>
      </div>
      {/* Abilities of ISources */}
      <motion.div
        className={crmstyleFrom.suiteSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={crmstyleFrom.suiteContent}>
          <h4>With our powerful CRM solution, you gain the ability to:</h4>
          <hr style={{ width: "30%", height: "20%" }} />
          <ul>
            <li>
              ✔{" "}
              <span className={`${crmstyleFrom.title}`}>
                Revolutionize Your Business with eduSIS
              </span>
              : Harnessing the Power of a Smart Data Model for Next-Level
              Reporting and Actionable Insights!
            </li>
            <li>
              ✔
              <span className={`${crmstyleFrom.title}`}>
                {" "}
                Boosting Productivity and Efficiency
              </span>
              : Empowering Users with Time-Saving Benefits through Automated
              Workflow, Task Assignment and Reduced Data Re-entry.
            </li>
            <li>
              ✔{" "}
              <span className={`${crmstyleFrom.title}`}>
                Empower Users with Self-Service Capabilities
              </span>
              : Streamline Operations, Save Time, and Boost Efficiency for your
              Operational Team through Strategic Leveraging!
            </li>
            <li>
              ✔{" "}
              <span className={`${crmstyleFrom.title}`}>
                Seamless User Experience{" "}
              </span>
              : Unlocking Effortless Application Navigation with Cutting-Edge UX
              Best Practices and a Multilingual Interface for Enhanced
              Accessibility and User Satisfaction
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className={crmstyleFrom.suiteSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={crmstyleFrom.suiteContent}>
          <h4>eduSIS Competitive Advantages and Capabilities</h4>
          <hr style={{ width: "30%", height: "20%" }} />
          <ul>
            <li>
              ✔{" "}
              <span className={`${crmstyleFrom.title}`}>
                Empowering Student Retention and Loyalt
              </span>
              : Utilizing the Potentials of a Comprehensive Self-Service Layer
              to Elevate Engagement and Drive Sustainable Growth within the
              Organization.
            </li>
            <li>
              ✔
              <span className={`${crmstyleFrom.title}`}>
                {" "}
                Empowering Academic Staff Efficiency
              </span>
              : Equipping Each Faculty Member with a Personalized Workspace,
              Facilitating Effortless Task Access, Execution, and Performance
              with Intuitive Clicks.
            </li>
            <li>
              ✔{" "}
              <span className={`${crmstyleFrom.title}`}>
                Fortify Data Integrity and Security
              </span>
              : Achieve Uncompromising Privacy, Robust Security, and
              Unparalleled Transparency within the Education Ecosystem through
              Enhanced Access Controls and Rigorous Data Governance
            </li>
          </ul>
        </div>
      </motion.div>
      <div className={`${crmstyleFrom.container} `}>
        <div>
          <h3>Administration</h3>
          <img src={e7} alt="" />
        </div>
        <div>
          <h3>Academic Plans</h3>
          <img src={e6} alt="" />
        </div>
        <div>
          <h3>Admission</h3>
          <img src={e5} alt="" />
        </div>
        <div>
          <h3>Registration</h3>
          <img src={e4} alt="" />
        </div>
        <div>
          <h3>Payment</h3>
          <img src={e1} alt="" />
        </div>
        <div>
          <h3>Student Affair</h3>
          <img src={e2} alt="" />
        </div>
        <div>
          <h3>Archiving</h3>
          <img src={e3} alt="" />
        </div>
      </div>

      
    {/* BUssiness added value */}
      <motion.div
        style={{ position: "relative", display: "flex", alignItems: "flex-start" }}
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={crmstyleFrom.suiteSection}
          style={{ flex: 1 }}
        >
          <div className={crmstyleFrom.suiteContent}>
            <h4>Business Added Values</h4>
            <hr style={{ width: "30%", height: "20%" }} />
            <ul>
              <li>
                ✔ Streamline Schedule Creation with an Intelligent Timetable
                Builder that Detects and Resolves Conflicts.
              </li>
              <li>
                ✔ Establish a Dynamic Hierarchy Setup for Enhanced Organizational
                Flexibility and Adaptability.
              </li>
              <li>
                ✔ Stay Connected and Informed with a User Inbox and Notification
                System.
              </li>
              <li>
                ✔ Enable Students to Register Online, Following Specified Rules
                for Courses, Programs, and Timetables.
              </li>
              <li>
                ✔ Create and Customize Admission Programs to Align with Unique
                Institution Needs.
              </li>
              <li>
                ✔ Effectively Manage Assignments for Smooth Task Distribution and
                Tracking.
              </li>
              <li>
                ✔ Efficiently Administer Exams and Results for Seamless Assessment
                and Outcome Publication.
              </li>
              <li>
                ✔ Streamline Fees Management with Payment Monitoring and Seamless
                Integration with Leading Payment Gateways.
              </li>
              <li>
                ✔ Gain Actionable Insights through Advanced Dashboards and
                Business Reports.
              </li>
              <li>
                ✔ Configure Study Programs Dynamically to Meet Ever-Changing
                Educational Demands.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className={crmstyleFrom.edisAnimatedImg}
          style={{
            backgroundImage: `url(${edis})`,
          }}
          initial={{ opacity: 0, x: -80, scale: 0.9, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          animate={{ rotate: [0, -2, 0, 2, 0], scale: [1, 1.02, 1], x: [0, -5, 0, 5, 0] }}
          transition={{ duration: 2.2 }}
          aria-label="EDIS image"
        />
      </motion.div>
      <motion.div
        className={crmstyleFrom.suiteSection}
        style={{ marginTop: 0, paddingTop: 0 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={crmstyleFrom.suiteContent} style={{ marginTop: 0, paddingTop: 0 }}>
          <ul>
            <li>
              ✔ Leverage the Power of a Relational Database Built on Oracle DB
              for Enhanced Data Management and Integrity.
            </li>
            <li>
              ✔ Adopt a Multitier Solution Architecture for Scalability and
              Performance Optimization.
            </li>
            <li>
              ✔ Automate Business Processes and Workflows with a BPM-Compliant
              Engine.
            </li>
            <li>
              ✔ Conduct Advanced Searches and Export Data for In-depth Analysis
              and Accessibility.
            </li>
            <li>
              ✔ Deliver a Seamless Experience Across Web, Mobile, and Web
              Services through Omni-channel Capabilities.
            </li>
            <li>
              ✔ Utilize the Latest Java Standards, UX Best Practices, and
              Reusable Components for Optimal System Performance and User
              Experience.
            </li>
            <li>
              ✔ Ensure Data and Function Security with a Standard Security
              Platform.
            </li>
            <li>
              ✔ Access Embedded Ready-made Tools for Extended Functionality
              Beyond the Educational Scope.
            </li>
          </ul>
        </div>
      </motion.div>
      <Footer className={`${styleF.ediSysFooter}`} />
    </div>
  );
}
