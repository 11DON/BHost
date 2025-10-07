import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/dataint.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function DataIntegPage() {
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
          <Link to="/dataManageMainPage">
            <h4>Data Management</h4>
          </Link>
          <h2>Data Integration</h2>
          <p>
            At I SOurces, we understand the critical role that data integration
            plays in empowering organizations to make informed decisions. With
            the exponential growth of data and the increasing number of sources
            from which it originates, merging and harmonizing diverse datasets
            has become a fundamental requirement for comprehensive analysis. We
            specialize in providing seamless data integration solutions that
            bring together information from multiple sources, enabling you to
            gain a unified and holistic view of your data.
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
          <img src={Ofor} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div
        className={customApp["hero-image"]}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${customApp.chatBot}`} style={{width: "80%", margin: "auto"}}>
          <h3>Why Data Integration Matters?</h3>
          <hr className={`${customApp.apphr}`} />
          <ul>
            <li style={{ listStyleType: "none" }}>
              In today's data-driven world, organizations collect data from
              various internal and external sources, including databases,
              software applications, websites, social media platforms, IoT
              devices, and more. Each of these sources generates valuable
              insights and perspectives, but these isolated datasets often fail
              to provide a complete picture of the business landscape. Data
              integration addresses this challenge by combining data from
              disparate sources and transforming it into a cohesive and
              meaningful format.
            </li>
          </ul>
          <hr />
          <h3 className={`${customApp.subtitle}`}>Holistic View:</h3>
          <ul>
            <li>
              By integrating diverse datasets, we help you gain a holistic view
              of your information. This comprehensive perspective enables you to
              identify relationships, uncover hidden patterns, and extract
              valuable insights that would otherwise remain concealed within
              isolated datasets. .
            </li>
          </ul>

          <h3 className={`${customApp.subtitle}`}>Improved Decision-Making:</h3>
          <ul>
            <li>
              With a unified dataset at your disposal, you can make more
              accurate and informed decisions. By removing data silos and
              inconsistencies, you can trust the integrity and reliability of
              the information you're working with, leading to better strategic
              planning, resource allocation, and risk management.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>Enhanced Efficiency:</h3>
          <ul>
            <li>
              Data integration eliminates the need for manual data
              consolidation, reducing the time and effort required for data
              preparation. By automating the process, we streamline data
              integration, allowing you to focus on analysis and interpretation,
              ultimately increasing productivity and efficiency within your
              organization.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>Real-Time Insights:</h3>
          <ul>
            <li>
              With our real-time data integration capabilities, you can harness
              up-to-the-minute information from diverse sources. By receiving
              continuous updates, you gain a competitive edge, as you can
              respond quickly to changing market conditions, emerging trends,
              and customer preferences.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>
            Elimination of Redundancy:
          </h3>
          <ul>
            <li>
              Multiple sources often contain overlapping or redundant
              information. Our data integration solutions detect and eliminate
              duplicates, ensuring that your consolidated dataset is lean,
              efficient, and free from unnecessary redundancy.
            </li>
          </ul>
      
        </div>
      </motion.div>
      <Footer className={styleF.footer} />
    </div>
  );
}
