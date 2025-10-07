import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import cdMain from "../assets/appDevMain.png";
import appDev1 from "../assets/appDev1.png";
import appDev2 from "../assets/appDev2.png";
import appDev3 from "../assets/appDev3.png";
import appDev4 from "../assets/appDev4.png";
import appDev5 from "../assets/appDev5.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ApplicationDevelopment() {
  return (
    <div>
      <div className={`${customApp.hero}  ${styles.reaya}`}>
        <Navbar />
        {/* Left Content */}
        <motion.div
          className={customApp["hero-content"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Applications Development</h3>
          <h4>
            <hr className={`${customApp.hr}`} />
          </h4>
          <p>
            ISources provides Applications Development that reflect Multiple
            Systems which provide the customers with full control to support
            their custom processes and unified cloud to access multiple systems
            while the users will benefit from valuable Apps that has superior
            productivity, efficiency and cost- effectiveness. We build modern
            and cloud native applications using the languages, databases and
            tools of developers’ choice and according to I Sources highest
            development standards and Oracle recent technologies.
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
          <img src={cdMain} alt="Insurance Suite" />
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={`${customApp.container} `}>
          {[
            {
              title: "Custom Digital Applications",
              img: appDev1,
              alt: "Organization Structure",
              to:"/customDigitalAppPage"
            },
            {
              title: "Cloud Native Applications",
              img: appDev2,
              alt: "Cloud Native Applications",
              to:"/cloudPage"
            },
            {
              title: "ChatBot & Digital Assistants",
              img: appDev3,
              alt: "Initiatives Management",
              to:"/chatBotPage"
            },
            {
              title: "Custom Digital Applications",
              img: appDev4,
              alt: "Meetings Review",
              to: "/customDigitalAppPage",
            },
            {
              title: "Oracle Forms Modernization",
              img: appDev5,
              alt: "Corportate KPIs Dashboards",
              to:"/oracleFormsPage"
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Link to={item.to ? item.to : "#"}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className={customApp.gridImg}
                />
              </Link>
              <h5>{item.title}</h5>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer className={styleF} />
    </div>
  );
}
