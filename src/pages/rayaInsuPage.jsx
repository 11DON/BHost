import Navbar from "../components/navbar";
import reayaStyles from "../components/styles/reayaInsuPage.module.css";
import styles from "../components/styles/Navbar.module.css";
import suite from "../assets/suite.png";
import { motion } from "framer-motion";
import cModules from "../assets/cModules.png";
import shield from "../assets/shield.png";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";

export default function RayaInsurance() {
  return (
    <div>
      <div className={`${reayaStyles.hero} ${styles.reaya}`}>
        <Navbar />
        {/* Left Content */}
        <motion.div
          className={reayaStyles["hero-content"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>Reaya</h1>
          <h3>Insurance Family</h3>
          <p>
            A Family of Insurance business applications that help all Insurance
            businesses evolve and improve their performance.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={reayaStyles["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={suite} alt="Insurance Suite" />
        </motion.div>
      </div>

      {/* Core Modules Section */}
      <motion.div
        className={reayaStyles.modulesSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={reayaStyles.modulesImage}>
          <img src={cModules} className={reayaStyles.cModules} />
        </div>
        <div className={reayaStyles.modulesContent}>
          <h3>Reaya</h3>
          <h4>Core Modules</h4>
          <ul>
            <li>Reaya General Functions</li>
            <li className={reayaStyles.active}>Reaya Medical</li>
            <li>Reaya Travel</li>
            <li>Reaya Marine</li>
            <li>Reaya Property/Fire</li>
            <li>Reaya Engineering</li>
            <li>Reaya General Liability</li>
          </ul>
          <button className={reayaStyles.startBtn}>Start Now</button>
        </div>
      </motion.div>


      {/* Insurance Site Features */}
      <motion.div
        className={reayaStyles.suiteSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={reayaStyles.suiteContent}>
          <h3>Reaya Insurance Suite</h3>
          <h4>Business Features</h4>
          <ul>
            <li>✔ Dynamic business process & workflows</li>
            <li>✔ Alerts & Notifications</li>
            <li>✔ Rapid Implementation</li>
            <li>✔ Best Practice & Track Records</li>
            <li>✔ Analytics & BI Reporting</li>
            <li>✔ Monitor, Audit & Control</li>
            <li>✔ Powerful administration</li>
          </ul>
        </div>
        <div className={reayaStyles.suiteImage}>
          <img src={shield} alt="Insurance Shield" />
        </div>
      </motion.div>
  <Footer className={styleF.footerReaya}/>
    </div>
  );
}
