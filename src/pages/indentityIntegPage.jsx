import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Deliver from "../assets/deliver.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function IdentityIntegPage() {
  return (
    <div>
      <div className={`${customApp.biggerHero}  ${styles.reaya}`}>
        <Navbar />
        {/* Left Content */}
        <motion.div
          className={customApp["cloudHero"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {" "}
          <Link to="/intMainPage">
            <h4>Integration Services</h4>
          </Link>
          <h2>Identity Integration</h2>
          <p>
            I Sources Automates Identity and Access Management (IAM) I Sources
            uses (Identity and Access Management (IAM)) to automate the
            administration of user access privileges across a company's
            resources throughout the entire identity management (IDM) life
            cycle. OIM allows organizations to manage the end-to-end life cycle
            of their user identities across resources both within and beyond the
            firewall, independently from enterprise applications.
          </p>
          <p>Sample of Features and Trends that could be adopted</p>
          <ul>
            <li>Run on browsers with Zero client-side tools</li>
            <li>Responsive & Beautiful User Interface</li>
            <li>Make Using of the current existing business logic</li>
            <li>
              Automate the human workflows & request using Business Process
              Management (BPM)
            </li>

            <li>
              Benefit of the Service Oriented Architecture (SOA) either for
              application building or Systems Integration
            </li>
          </ul>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={Deliver} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div
        className={customApp["hero-image"]}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${customApp.chatBot}`}>
          <h3>I Sources provides the following IDM services:</h3>
          <hr className={`${customApp.apphr}`} />
          <ul>
            <li>
              Identity Administration and Role Management: I Sources helps
              organizations create, manage, and retire user identities and
              roles.
            </li>
            <li>
              User Provisioning and Compliance: I Sources helps organizations
              onboard new users and deprovision users who no longer need access.
              I Sources also helps organizations ensure that their users are
              compliant with security policies.
            </li>
            <li>
              Web Applications and Web Services Access Control: I Sources helps
              organizations control access to web applications and web services.
            </li>
            <li>
              Single Sign-On and Federated Identities: I Sources helps
              organizations implement single sign-on (SSO) and federated
              identities.
            </li>
            <li>
              Fraud Detection: I Sources helps organizations detect fraud by
              monitoring user activity for suspicious behavior.
            </li>
            <li>
              Multifactor Authentication and Risk Management: I Sources helps
              organizations implement strong, multifactor authentication and
              risk management.
            </li>
            <li>
              Role Governance and Identity Analytics, Audit, and Reports: I Sources helps organizations govern roles and identities, analyze
              identity data, and generate reports.
            </li>
          </ul>
          <hr />
        </div>
      </motion.div>
      <Footer className={styleF.footer} />
    </div>
  );
}
