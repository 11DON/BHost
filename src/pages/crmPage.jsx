import Navbar from "../components/navbar";
import Footer from "../components/footer";
import crm3 from "../assets/crm3.png";
import crm1 from "../assets/crm1.png";
import crm2 from "../assets/crm2.png";
import icon from "../assets/icon.png";
import crmA from "../assets/crmA.png";
import crmMA from "../assets/crmMA.png";
import crmQ from "../assets/crmQ.png";
import crmC from "../assets/crmC.png";
import crmP from "../assets/crmP.png";
import crmlamp from "../assets/crmlamp.png";
import crmW from "../assets/crmW.png";
import styles from "../components/styles/Navbar.module.css";
import crmstyleFrom from "../components/styles/crm.module.css";
import { motion } from "framer-motion";
export default function CrmPage() {
  return (
    <div>
      <div
        className={`${crmstyleFrom.hero} ${crmstyleFrom.reaya} ${crmstyleFrom.crmSuite} ${styles.reaya}`}
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
          <h1>CRM Suite</h1>
          <h3>
            A cloud based CRM platform fueled by AI, boosting your sales
            operations, managing your sales processes and activities from lead
            generation to deal closure, empowering your sales team with
            real-time data, Customizable pipelines, sales forecasting
            capabilities, and enhanced customer insights.
          </h3>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={crmstyleFrom["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={crm3} alt="Insurance Suite" />
        </motion.div>
      </div>
      {/* Benefits of implementing I sources Section */}
      <motion.div
        className={crmstyleFrom.modulesSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={crmstyleFrom.modulesImage}>
          <img src={crm2} className={crmstyleFrom.cModules} />
        </div>
        <div className={crmstyleFrom.modulesContent}>
          <ul style={{ listStyleType: "none" }}>
            <li
              className={`${crmstyleFrom.crmSuite} `}
              style={{ listStyleImage: `url(${icon})` }}
            >
              <p>What are the benefits of implementing I sources CRM Suite ?</p>
            </li>
            <p>
              <span className={crmstyleFrom.by}>
                By Leveraging the power of our CRM Suite
              </span>
              , your sales team's productivity will skyrocket. By consolidating
              all prospect information in a centralized hub, our solution
              empowers your team to efficiently close deals and foster vital
              business relationships. Experience enhanced efficiency and
              accelerated growth with our state-of-the-art CRM Suite.
            </p>
          </ul>
        </div>
      </motion.div>

      {/* Abilities of ISources */}
      <motion.div
        className={crmstyleFrom.suiteSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={crmstyleFrom.suiteContent}>
          <h4>With our powerful CRM solution, you gain the ability to:</h4>
          <hr style={{ width: "30%", height: "20%" }} />
          <ul>
            <li>
              ✔ Establish a centralized database that spans your entire
              organization.
            </li>
            <li>
              ✔ Seamlessly handle all customer and prospect communication and
              interactions.
            </li>
            <li>✔ Streamline the data entry process through automation.</li>
            <li>✔ Receive timely reminders to follow up with prospects.</li>
            <li>✔ Effectively organize and manage contact data.</li>
            <li>✔ Generate efficient sales reports for better insights.</li>
            <li>✔ Automate sales forecasting to empower your team.</li>
            <li>
              ✔ Scale your sales processes effortlessly as your business
              expands.
            </li>
            <li>✔ Foster well-established communication within your team.</li>
            <li>
              ✔ Simplify and enhance the efficiency of administrative tasks.
            </li>
          </ul>
        </div>
        <div className={crmstyleFrom.suiteImage}>
          <img src={crm1} alt="Insurance Shield" />
        </div>
      </motion.div>

      {/* Components */}

      <div className={`${crmstyleFrom.container} `}>
        <div>
          <h3>Admin & Setup</h3>
          <img src={crmlamp} alt="" />
        </div>
        <div>
          <h3>Customer Management</h3>
          <img src={crmP} alt="" />
        </div>
        <div>
          <h3>Sales</h3>
          <img src={crmW} alt="" />
        </div>
        <div>
          <h3>Call Center</h3>
          <img src={crmC} alt="" />
        </div>
        <div>
          <h3>Quotation</h3>
          <img src={crmQ} alt="" />

        </div>
        <div>
          <h3>Marketing Automation</h3>
          <img src={crmMA} alt="" />

        </div>
                <div>
          <h3>Analytics</h3>
          <img src={crmA} alt="" />

        </div>
            </div>

      {/* what makes it ideal */}
      <motion.div
        className={crmstyleFrom.suiteSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className={crmstyleFrom.suiteContent}>
          <h4>What Makes I sources CRM Suite the Ideal Choice?</h4>
          <hr style={{ width: "30%", height: "20%" }} />
          <ul>
            <li>
              ✔ Gain valuable insights and access powerful reporting
              capabilities through our intuitive dashboard.
            </li>
            <li>
              ✔ Easily view and analyze important information about your
              company, enabling data-driven decision-making.
            </li>
            <li>
              ✔ Keep track of all your deals in a seamless manner, ensuring
              nothing falls through the cracks.
            </li>
            <li>
              ✔ Effectively manage your prospects and monitor their progress
              through the sales pipeline.
            </li>
            <li>
              ✔ Stay on top of important email interactions, receive timely
              notifications, and maintain effective communication.
            </li>
            <li>
              ✔ Visualize and manage your sales pipeline with ease, optimizing
              the flow of opportunities from lead to conversion.
            </li>
            <li>
              ✔ Simplify the process of scheduling meetings and effortlessly
              coordinate with your team and clients.
            </li>
            <li>
              ✔ Rest assured that your data is securely protected, ensuring
              confidentiality and compliance with privacy regulations.
            </li>
          </ul>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
