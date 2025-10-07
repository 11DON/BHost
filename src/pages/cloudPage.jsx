import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import CloudMain from "../assets/CloudMain.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CloudPage() {
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
          <Link to="/applDevPage">
            <h4>Applications Development</h4>
          </Link>
          <h2>Cloud Native Apps</h2>
          <p>
            Cloud native technologies are characterized by the use of
            containers, microservices, server less functions, development
            pipelines, infrastructure expressed as code, event-driven
            applications, and Application Programming Interfaces (APIs). Cloud
            native enables faster software development and the ability to build
            applications that are resilient, manageable, observable, and
            dynamically scalable to global enterprise levels.
          </p>
          <p>
            Apart from focusing on business logic, you will be dealing with
            services running across multiple machines when building cloud native
            apps.
          </p>
          <p>And this has a lot of benefits,</p>
          <ul>
            <li>Fast(er) verification, deployment and releases.</li>
            <li>Easier to deliver new value.</li>
            <li>Use the best and latest tools/frameworks for the job.</li>
            <li>Move quicker and faster as you focus on smaller pieces.</li>
            <li>More ability to scale.</li>
          </ul>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={CloudMain} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div
        className={customApp["hero-image"]}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div id={`${customApp.Services}`}>
          <h2>Our Services in Cloud Native Applications</h2>
          <hr />
          <p>
            I Sources can design a Solution Architecture for your cloud native
            applications and also can help you develop your cloud native
            applications using any of the following development languages:
          </p>
          <p>
            Java, Oracle ADF, Oracle APEX, JavaScript <br />
            In addition we can help you manage the access to your cloud native
            resources using Oracle Identity and Access Management policies.
          </p>
        </div>
      </motion.div>

      <Footer className={styleF.footer} />
    </div>
  );
}
