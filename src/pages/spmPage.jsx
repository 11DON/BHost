import p from "../assets/p.png";
import spm from "../assets/spm1.png";
import spm2 from "../assets/spm2.png";
import spm3 from "../assets/spm3.png";
import spm4 from "../assets/spm4.png";
import spm5 from "../assets/spm5.png";
import spm6 from "../assets/spm6.png";
import spm7 from "../assets/spm7.png";
import spm8 from "../assets/spm8.png";
import spm9 from "../assets/spm9.png";

import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import crmstyleFrom from "../components/styles/spm.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
export default function SpmPage() {
  return (
    <div>
      <div className={`${crmstyleFrom.hero}  ${styles.reaya}`}>
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
            Operation team. Empowering your edu ecosystem with robust analytics
            and reporting insights.
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
          <img src={p} alt="Insurance Suite" />
        </motion.div>
      </div>

      {/* why is it best choice */}
      
      <motion.div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
        }}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={crmstyleFrom.suiteSection} style={{ flex: 1 ,paddingTop:'8rem'}}>
          <div className={crmstyleFrom.suiteContent}>
            <h4 style={{ opacity: "0.5" }}>
              Why is I Sources’ SPM the best choice for your business?
            </h4>
            <hr style={{ width: "30%", height: "20%" }} />
            <ul>
              <li>
                ✔ Dynamic security management with Responsive visual design for
                goals & objectives creation
              </li>
              <li>
                ✔ Advanced search capabilities with Documents archiving facility
                .
              </li>
              <li>
                ✔ Ability to integrate with different systems like PM tools, SMS
                & emails, ERP, …. etc
              </li>
              <li>✔ Boards and Review meetings management</li>
              <li>✔ Projects Planning with weights defined.</li>
              <li>✔ Resources Activities management module .</li>
              <li>✔ Budget approvals on Projects and Services blueprints.</li>
              <li>
                ✔ Corporate strategic Performance Insights with a focus on
                individuals’ performance designed KPIs
              </li>
              <li>
                ✔ Offering contractual Customization as needed (application
                screens – integration services ) .
              </li>
              <li>✔ Training plan with needful materials</li>
              <li>✔ Free 3-month support post GO-LIVE</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className={crmstyleFrom.edisAnimatedImg}
          style={{
            backgroundImage: `url(${spm})`,
          }}
          initial={{ opacity: 0, x: -80, scale: 0.9, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          animate={{
            rotate: [0, -2, 0, 2, 0],
            scale: [1, 1.02, 1],
            x: [0, -5, 0, 5, 0],
          }}
          transition={{ duration: 2.2 }}
          aria-label="EDIS image"
        />


      </motion.div>
      <div className={`${crmstyleFrom.container} `}>
        <div>
          <h3>Organization Structure</h3>
          <img src={spm7} alt="" />
        </div>
        <div>
          <h3>Task Management</h3>
          <img src={spm6} alt="" />
        </div>
        <div>
          <h3>Initiatives Management</h3>
          <img src={spm5} alt="" />
        </div>
        <div>
          <h3>Meetings Review</h3>
          <img src={spm4} alt="" />
        </div>
        <div>
          <h3>Corportate KPIs Dashboards</h3>
          <img src={spm9} alt="" />
        </div>
        <div>
          <h3>Goals Management</h3>
          <img src={spm2} alt="" />
        </div>
        <div>
          <h3>Projects Set-Up</h3>
          <img src={spm8} alt="" />
        </div>
        <div>
          <h3>Projects Follow-Up</h3>
          <img src={spm3} alt="" />
        </div>
      </div>
      <Footer className={styleF.spmFooter} />
    </div>
  );
}
