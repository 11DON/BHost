import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/OForms.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function OrcaleFormsPage() {
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
          <h2>Oracle Forms Modernization</h2>
          <p>
            Oracle Forms technology has proven to be a reliable and trusted
            platform for thousands of customers, supporting their core business
            systems. However, as businesses look to the future, there is a
            growing desire to leverage the latest technology trends and
            principles. This enables them to extend their current applications
            and align their business and IT needs with the ever-evolving digital
            landscape.
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
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={Ofor} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div
        className={customApp["hero-image"]}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${customApp.chatBot}`}>
          <h3>Our Services in Chatbot and Digital Assistant:</h3>
          {/* <hr className={`${customApp.apphr}`}/> */}
          <ul>
            <li>Pre-Modernization Services.</li>
            <li>
              Develop a Modernization Roadmap for your Oracle Forms
              applications.
            </li>
            <li>
              Provide professional technology training for your developers.
            </li>
            <li>Modernization Services:</li>
          </ul>
          <hr />
          <h3  className={`${customApp.subtitle}`}>Option 1: Upgrade to the Latest Oracle Forms Version:</h3>
          <ul>
            <li>
              Upgrade your existing application to the latest Oracle Forms
              version.
            </li>
            <li>
              Retain the same application functionality while benefiting from
              new features.
            </li>
          </ul>

          <h3  className={`${customApp.subtitle}`}>Option 2: Migration to Oracle APEX:</h3>
          <ul>
            <li>
              Migrate your application to Oracle Application Express (APEX).
            </li>
            <li>Utilize the same database components and business logic.</li>
            <li>Take advantage of the capabilities offered by APEX.</li>
          </ul>
          <h3  className={`${customApp.subtitle}`}>Option 3: Migration to Oracle ADF:</h3>
          <h4>(Completely redesign your Oracle Forms application)</h4>
          <ul>
            <li>
              Develop a new application based on SOA/Cloud standards using
              Oracle Application Development Framework (ADF).
            </li>
            <li>
              Redesign your Oracle Forms applications according to SOA/Cloud
              standards.
            </li>
            <li>
              Develop new applications that align with modern architecture
              principles.
            </li>
            <li>
              Provide an onsite team leader to guide and manage your team in
              delivering the above modernization services.
            </li>
          </ul>
        </div>
      </motion.div>
            <Footer className={styleF.footer} />
      
    </div>
  );
}
