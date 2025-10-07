import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import CloudMain from "../assets/tr.png";
import aws from "../assets/aws.png";
import micro from "../assets/micro.png";
import oracle from "../assets/ora.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TrainingPage() {
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
          <Link to="/managedServicesPage">
            <h4>Managed Services</h4>
          </Link>
          <h2>Training</h2>
          <p>
            I Sources’ technology trainings focus on enriching its customer’s
            technical team competence and skills, our IT training services will
            improve efficiency, manage risk and deliver competitive advantages
            for your organization. We offer top quality training and high
            qualified instructors to meet global organizations training goals. I Sources provides your business with Oracle standard or customized
            trainings with practical & hands-on workshops that bring your team
            to the highest technical skills.
          </p>
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
          <h2>What we offer you:</h2>
          <ul>
            <li>Building Capacity Planning for Your Team.</li>
            <li>Technology Orientation Webinars.</li>
            <li>Technology Orientation Webinars.</li>
            <li>Onsite Training.</li>
          </ul>
        </div>
      </motion.div>
   <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={`${customApp.traincont} `}>
          {[
            {
              img: oracle,
                to:"https://www.oracle.com/"
            },
            {
              img: aws,
              to:"https://aws.amazon.com/"

            },
            {
              img: micro,
              to:"https://www.microsoft.com/en-eg/"
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
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer className={styleF.footer} />
    </div>
  );
}
