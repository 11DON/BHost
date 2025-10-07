import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/OForms.png";
import { div } from "framer-motion/client";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function IntegPage() {
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
          <h2>Application Integration</h2>
          <p>
            At I Sources, we understand the importance of effective application
            integration in today's interconnected business landscape. With our
            expertise in integrating various applications using cutting-edge
            technologies, such as Service-Oriented Architecture (SOA),
            Application Integration Architecture (AIA), and API Management, we
            enable seamless data exchange and collaboration between different
            systems, ultimately enhancing your organization's performance.
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
        <div className={`${customApp.chatBot}`}>
          <h3>Comprehensive Integration Solutions</h3>
          <hr className={`${customApp.apphr}`} />
          <ul>
            <li>
              Our team of skilled professionals possesses extensive experience
              in integrating diverse applications, regardless of their
              complexity or underlying technologies. We provide end-to-end
              integration solutions that connect your critical systems, ensuring
              smooth communication and data flow across your organization.
            </li>
          </ul>
          <hr />
          <h3 className={`${customApp.subtitle}`}>
            Service-Oriented Architecture (SOA)
          </h3>
          <ul>
            <li>
              By leveraging SOA principles, we design and implement integration
              solutions that promote modularity, scalability, and reusability.
              Our approach enables you to build a flexible and agile IT
              infrastructure, allowing for seamless integration with existing
              and future applications.
            </li>
          </ul>

          <h3 className={`${customApp.subtitle}`}>
            Application Integration Architecture (AIA)
          </h3>
          <ul>
            <li>
              I Sources excels in developing robust integration architectures
              that align with your business objectives. Our AIA expertise
              ensures that your applications can communicate and share data
              efficiently, facilitating streamlined business processes and
              reducing redundancy.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>API Management</h3>
          <ul>
            <li>
              We recognize the increasing significance of APIs (Application
              Programming Interfaces) as a means of connecting applications and
              systems. Our API management solutions empower your organization to
              expose, secure, and manage APIs effectively, enabling seamless
              integration with external partners, customers, and suppliers.
            </li>
          </ul>
          <motion.div  
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}>


          <div id={`${customApp.benefits}`}>
            <h3
              className={`${customApp.subtitle}`}
              style={{ paddingTop: "5rem" }}
            >
              Benefits of Application Integration with I Sources
            </h3>
            <ul>
              <li>
                Enhanced Data Exchange: With our application integration
                solutions, you can bid farewell to manual data entry, repetitive
                tasks, and data silos. We enable real-time data exchange between
                different applications, ensuring accurate and up-to-date
                information across your organization. This results in improved
                decision-making, streamlined operations, and increased
                productivity.
              </li>
              <li>
                Optimized Business Processes: Our integration expertise allows
                for the automation of business processes that span multiple
                applications. By eliminating manual handoffs and reducing data
                duplication, we optimize your workflows, improving efficiency
                and reducing errors. With streamlined processes, you can respond
                swiftly to market changes and gain a competitive edge.
              </li>
              <li>
                Seamless Collaboration: Efficient application integration
                fosters seamless collaboration among teams and departments
                within your organization. By enabling systems to communicate and
                share data effortlessly, I Sources breaks down data barriers and
                enhances cross-functional collaboration. This promotes knowledge
                sharing, accelerates innovation, and drives organizational
                growth.
              </li>
              <li>
                Scalable and Future-Ready Solutions: We understand that your
                business is dynamic, and technology evolves rapidly. I Sources'
                application integration solutions are designed to be scalable
                and adaptable, allowing for future growth and changes in your IT
                landscape. Our expertise ensures that your integration strategy
                remains robust and future-ready, empowering your organization to
                embrace new technologies and stay ahead of the competition.
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
