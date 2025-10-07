import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import process from "../assets/Sup.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";

export default function SupportPage() {
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
          <Link to="/managedServicesPage">
            <h4>Managed Services</h4>
          </Link>
          <h2>Support</h2>
          <p>
            I Sources understands the system impacts, risks & solution agility
            and relentlessly focuses on providing Application Maintenance and
            Support for different models and client needs. Our support services
            help maximize performance, achieve high availability and reduce risk
            across the complete Oracle technology stack. These services has both
            onshore and offshore capabilities to meet specific client
            requirements. We offer different models of support that suit our
            customers needs. I Sources provides: On Call Support, On Site
            Support, Remote support for all Oracle technology stack.
          </p>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={process} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div  className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
      <div>
        <div id={`${customApp.benefits}`}>
          <h3
            className={`${customApp.subtitle}`}
            style={{textAlign:"center"}}
          >
            We are aware of the fact that our industry continues to change
            rapidly, and we know our clients must continue to modernize. I Sources IT Support Services allow you to minimize risk and cost, and
            rapidly gain business advantages by implementing and supporting your
            IT infrastructure with highly integrated and tailored services. I Sources provides the following support types:
          </h3>
          <ul style={{ paddingLeft: "10rem",fontSize:"1rem" }}>
            <li>SLA</li>
            <li>Remote Support</li>
            <li>Monitoring and Resolution</li>
            <li>Cloud Services Support</li>
          </ul>
        </div>
      </div>
      </motion.div>
            <Footer className={styleF.footer} />
      
    </div>
  );
}
