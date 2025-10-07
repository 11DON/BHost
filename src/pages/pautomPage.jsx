import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import process from "../assets/processMain.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function ProcessAutoPage() {
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
          <h2>Process Automation</h2>
          <p>
            At I Sources, we recognize that manual and repetitive tasks can be a
            significant drain on productivity and hinder operational efficiency.
            That's why we offer cutting-edge automation solutions for workflows,
            Business Process Management (BPM), and Robotic Process Automation
            (RPA). By automating these processes, we help you streamline
            operations, increase productivity, reduce errors, and achieve
            operational excellence.
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
      <motion.div
        className={customApp["hero-image"]}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${customApp.chatBot}`}>
          <h3>Why Choose I Sources for Process Automation?</h3>
          <hr className={`${customApp.apphr}`} />

          <h3 className={`${customApp.subtitle}`}>
            Expertise in Workflow Automation:
          </h3>
          <ul>
            <li>
              Our team of skilled professionals excels in automating workflows
              across various industries and business functions. We analyze your
              existing processes, identify automation opportunities, and design
              customized solutions that align with your unique requirements. By
              automating routine and manual tasks, we enable your workforce to
              focus on value-added activities, driving efficiency and
              productivity.
            </li>
          </ul>

          <h3 className={`${customApp.subtitle}`}>
            Business Process Management (BPM) Solutions
          </h3>
          <ul>
            <li>
              I Sources specializes in implementing robust Business Process
              Management (BPM) solutions that provide end-to-end process
              visibility and control. Our BPM expertise allows you to define,
              model, execute, monitor, and optimize your business processes. By
              eliminating bottlenecks, standardizing workflows, and ensuring
              compliance, we empower your organization to achieve operational
              excellence.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>
            Robotic Process Automation (RPA) Solutions
          </h3>
          <ul>
            <li>
              Leveraging the power of automation and artificial intelligence,
              I Sources offers advanced Robotic Process Automation (RPA)
              solutions. We automate repetitive and rule-based tasks typically
              performed by humans, using software robots that mimic human
              actions. By offloading these tasks to RPA, you can significantly
              reduce errors, enhance accuracy, and free up your workforce for
              more strategic and creative endeavors.
            </li>
          </ul>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`${customApp.subtitle}`}
              style={{ paddingTop: "5rem" }}
            >
              Benefits of Process Automation with I Sources
            </h3>
            <div id={`${customApp.benefits}`}>
              <hr className={`${customApp.apphr}`} />
              <ul>
                <li>
                  <h3>Increased Productivity:</h3>
                  Automation eliminates time-consuming manual tasks, allowing
                  your employees to focus on high-value activities that require
                  human judgment and expertise. By automating repetitive tasks,
                  your team can accomplish more in less time, leading to
                  increased productivity and improved overall efficiency.
                </li>
                <li>
                  <h3>Reduced Errors and Improved Accuracy:</h3>
                  Manual data entry and repetitive tasks are prone to errors.
                  With process automation, the risk of human error is greatly
                  reduced. By leveraging advanced automation technologies,
                  I Sources ensures accuracy and consistency in your processes,
                  minimizing costly mistakes and rework.
                </li>
                <li>
                  <h3>Streamlined Workflows:</h3>
                  Our automation solutions optimize and streamline your
                  workflows, eliminating bottlenecks and reducing process cycle
                  times. By providing real-time visibility into the status of
                  tasks and processes, I Sources enables you to proactively
                  address issues, make informed decisions, and ensure smooth
                  operations.
                </li>
                <li>
                  <h3>Enhanced Compliance and Risk Management:</h3>
                  Automation enables you to enforce standard operating
                  procedures and compliance guidelines consistently. I Sources'
                  solutions ensure that your processes adhere to regulatory
                  requirements, reducing the risk of non-compliance and
                  potential penalties. By automating compliance checks and
                  audits, you can enhance risk management and maintain a strong
                  control environment.
                </li>
                <li>
                  <h3>Scalable and Agile Solutions:</h3>
                  I Sources understands that your business needs may evolve over
                  time. Our process automation solutions are designed to be
                  scalable and adaptable, allowing you to automate additional
                  processes as your organization grows. We ensure that our
                  solutions integrate seamlessly with your existing systems and
                  technologies, future-proofing your automation strategy.
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
