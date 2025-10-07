import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import crmstyleFrom from "../components/styles/customApp.module.css";
import chtB from "../assets/chtB.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cu1 from "../assets/cu1.png";
import cu2 from "../assets/cu2.png";
import cu3 from "../assets/cu3.png";

export default function ChatBotPage() {
  return (
    <div>
      <div className={`${crmstyleFrom.hero} ${styles.reaya}`}>
        <Navbar />

        {/* Left Content */}
        <motion.div
          className={crmstyleFrom["hero-content"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/applDevPage">
            <h4>Applications Development</h4>
          </Link>
          <h3 id={crmstyleFrom.Apptitle}>Chatbot & Digital Assistants</h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "black",
              fontWeight: "bold",
              opacity: 0.5,
            }}
          >
            Chatbots are increasingly playing an important role in Digitization,
            they boost operational efficiency and bring cost savings to
            businesses while offering added services for customers. They allow
            companies to easily resolve many types of customer queries and
            issues while reducing the need for human interaction. Chatbots allow
            businesses to engage with an unlimited number of customers in a
            personal way. Any business can provide, personalized and humanlike
            service to millions of people at the same time by using chatbots.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={crmstyleFrom["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={chtB} alt="Custom Digital Applications" />
        </motion.div>
      </div>

      <motion.div
        className={crmstyleFrom["hero-image"]}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${crmstyleFrom.chatBot}`}>
          <h3>Our Services in Chatbot and Digital Assistant:</h3>
          <hr />
          <ul>
            <li>Build Chatbot Apps / Digital Assistants.</li>
            <li>
              Enable integrations with back end systems of your current chatbot
              Apps.
            </li>
          </ul>
          <hr />
          <h3>The Main Types of Chatbots:</h3>
          <ul>
            <li>
              Task-oriented chatbots: (declarative) are single-purpose programs
              that focus on performing one function. They generate automated but
              conversational responses to user inquiries.
            </li>
            <li>
              Data-driven and predictive (conversational) chatbots are often
              referred to as virtual assistants or digital assistants, and they
              are much more sophisticated, interactive, and personalized than
              task-oriented chatbots. They apply predictive intelligence and
              analytics to enable personalization based on past user behavior.
              Digital assistants by time can provide recommendations, and even
              anticipate needs.
            </li>
          </ul>
        </div>
      </motion.div>
      <Footer className={styleF.footer} />
    </div>
  );
}
