import p from "../assets/p.png";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import crmstyleFrom from "../components/styles/spm.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion,  } from "framer-motion";
export default function SpmPage() {
    return (
           <div>
        <div
          className={`${crmstyleFrom.hero}  ${styles.reaya}`}
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
            <img src={p} alt="Insurance Suite" />
          </motion.div>
        </div>
        <Footer className={styleF.spmFooter} />
      </div>
    )
}