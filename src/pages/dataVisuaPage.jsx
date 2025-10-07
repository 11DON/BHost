import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/bi.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function DataVisualPage() {
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
          <h2>Data Visualization [BI & Analytics]</h2>
          <p>
            In the era of big data, presenting information in a visually
            appealing and easily understandable format is key to unlocking its
            true value. At I Sources, we specialize in data visualization,
            empowering organizations to gain deeper insights and make informed
            decisions. Our expertise in business intelligence (BI) and analytics
            enables us to create interactive and intuitive dashboards, reports,
            and analytics that bring your data to life, transforming complex
            information into clear and actionable visualizations.
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
        <div
          className={`${customApp.chatBot}`}
          style={{ width: "80%", margin: "auto" }}
        >
          <h3>Why Data Visualization Matters?</h3>
          <hr className={`${customApp.apphr}`} />
          <ul>
            <li style={{ listStyleType: "none" }}>
              Data visualization is the art and science of representing data
              visually, using charts, graphs, maps, and other visual elements.
              It goes beyond presenting raw numbers and statistics by
              translating complex datasets into meaningful and easily digestible
              visual representations. By visualizing your data, you can uncover
              patterns, trends, and correlations that may remain hidden in
              spreadsheets or text-based reports. This helps stakeholders across
              your organization to better understand the insights and make
              data-driven decisions confidently.
            </li>
          </ul>
          <hr />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div id={`${customApp.benefits}`}>
              <h3
                className={`${customApp.subtitle}`}
                style={{ paddingTop: "5rem" }}
              >
                The Benefits of Our Data Visualization Expertise
              </h3>
              <hr className={`${customApp.apphr}`} />
              <h3 className={`${customApp.subtitle}`}>Holistic View:</h3>
              <ul>
                <li>
                  By integrating diverse datasets, we help you gain a holistic
                  view of your information. This comprehensive perspective
                  enables you to identify relationships, uncover hidden
                  patterns, and extract valuable insights that would otherwise
                  remain concealed within isolated datasets. .
                </li>
              </ul>

              <h3 className={`${customApp.subtitle}`}>Clear Insights:</h3>
              <ul>
                <li>
                  Our data visualization solutions provide a clear and concise
                  representation of complex information. By transforming raw
                  data into interactive visualizations, we enable you to grasp
                  insights at a glance, helping you identify trends, outliers,
                  and patterns that drive your business forward.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Streamlined Workflows:
              </h3>
              <ul>
                <li>
                  By automating content-related processes, such as document
                  routing, approvals, and version control, our solutions
                  streamline your workflows. This ensures that content flows
                  seamlessly through your organization, minimizing bottlenecks,
                  reducing errors, and improving overall productivity.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Actionable Intelligence:
              </h3>
              <ul>
                <li>
                  Data visualizations empower decision-makers by presenting
                  information in a way that is easy to comprehend and act upon.
                  With intuitive dashboards and reports, you can quickly
                  identify areas of improvement, make strategic choices, and
                  take proactive measures to optimize your operations.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Improved Compliance and Security:
              </h3>
              <ul>
                <li>
                  Data security and regulatory compliance are critical concerns
                  for organizations in today's digital landscape. Our content
                  management solutions incorporate robust security measures,
                  including access controls, encryption, and audit trails,
                  ensuring that your sensitive information is protected.
                  Additionally, our solutions facilitate compliance with
                  industry regulations and data protection laws.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Interactive Exploration:
              </h3>
              <ul>
                <li>
                  We create interactive visualizations that allow you to dive
                  deeper into your data. With drill-down capabilities, filters,
                  and dynamic elements, you can explore different dimensions and
                  perspectives, revealing granular details and answering
                  specific questions in real-time.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Engaging Presentations:
              </h3>
              <ul>
                <li>
                  Our data visualizations are designed to captivate and engage
                  your audience. By using eye-catching visuals, interactive
                  elements, and storytelling techniques, we ensure that your
                  data presentations leave a lasting impression, fostering
                  better understanding and buy-in from stakeholders.
                </li>
              </ul>
              <h3 className={`${customApp.subtitle}`}>
                Data-driven Collaboration:
              </h3>
              <ul>
                <li>
                  Visualizations facilitate effective collaboration among team
                  members. With shared dashboards and reports, colleagues can
                  align their understanding, discuss findings, and collaborate
                  on strategies, driving a culture of data-driven
                  decision-making across your organization.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer className={styleF.footer} />
    </div>
  );
}
