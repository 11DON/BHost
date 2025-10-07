import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/ContM.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function ContentManagePage() {
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
          <h2>Content Management</h2>
          <p>
            In today's fast-paced business environment, effectively organizing
            and managing your content is essential for seamless operations and
            enhanced productivity. At I Sources, we specialize in providing
            cutting-edge content management solutions that enable organizations
            to streamline their content-related processes. With our
            comprehensive suite of tools, you can easily store, retrieve, and
            collaborate on your valuable data and documents, unlocking new
            levels of efficiency and effectiveness.
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
          <h3>Why Content Management Matters?</h3>
          <hr className={`${customApp.apphr}`} />
          <ul>
            <li style={{ listStyleType: "none" }}>
              Content management plays a crucial role in modern businesses. As
              the volume of digital content continues to grow exponentially,
              organizations face the challenge of efficiently organizing and
              accessing their data and documents. Content management solutions
              offer a centralized platform for storing, managing, and retrieving
              information, ensuring that the right content is accessible to the
              right people at the right time. By implementing an effective
              content management strategy, organizations can optimize their
              workflows, improve collaboration, and gain a competitive
              advantage.
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
                The Benefits of Our Content Management Solutions
              </h3>
              <hr className={`${customApp.apphr}`} />
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
                Enhanced Collaboration:
              </h3>
              <ul>
                <li>
                  Effective collaboration is vital for successful teamwork. Our
                  content management solutions enable secure document sharing,
                  real-time co-authoring, and version tracking, allowing
                  multiple users to work on the same document simultaneously.
                  This promotes efficient collaboration, eliminates version
                  conflicts, and accelerates decision-making processes.
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
                Scalability and Flexibility:
              </h3>
              <ul>
                <li>
                  Our content management solutions are designed to grow with
                  your organization. Whether you have a small team or a large
                  enterprise, our solutions can scale to meet your evolving
                  needs. We offer flexible deployment options, including
                  cloud-based solutions, ensuring accessibility and convenience
                  across different devices and locations.
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
                Scalability and Flexibility:
              </h3>
              <ul>
                <li>
                  Our content management solutions are designed to grow with
                  your organization. Whether you have a small team or a large
                  enterprise, our solutions can scale to meet your evolving
                  needs. We offer flexible deployment options, including
                  cloud-based solutions, ensuring accessibility and convenience
                  across different devices and locations.
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
