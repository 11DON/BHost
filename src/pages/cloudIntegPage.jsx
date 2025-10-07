import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cMain from "../assets/Cmain.png";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";
export default function CloudIntegPage() {
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
          <h2>Cloud Integration</h2>
          <h4 style={{color: "black" ,paddingTop: "10px" ,opacity: "0.6"}}>
            I Sources is a leading provider of cloud integration solutions. We
            help organizations of all sizes to move their data and applications
            to the cloud, and to integrate their cloud-based systems with their
            on-premises systems.
          </h4>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={cMain} alt="Insurance Suite" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`${customApp.chatBot}`} style={{width: "70%", paddingLeft: "6rem"}}>
        <h3 className={`${customApp.subtitle}`}>Reduced costs:</h3>
          <ul>
            <li>
              Cloud computing can help organizations to reduce their IT costs by
              eliminating the need to purchase and maintain their own hardware
              and software.
            </li>
          </ul>

          <h3 className={`${customApp.subtitle}`}>Increased agility</h3>
          <ul>
            <li>
              The cloud allows organizations to quickly and easily scale their
              IT resources up or down as needed. This can be a major advantage
              for organizations that experience seasonal fluctuations in demand.
            </li>
          </ul>
          <h3 className={`${customApp.subtitle}`}>Improved security:</h3>
          <ul>
            <li>
              Cloud providers offer a number of security features that can help
              organizations to protect their data.
            </li>
            <li>
                  I Sources has a proven track record of success in helping
                  organizations to integrate their cloud-based systems. We have
                  a team of experienced consultants who can help you to assess
                  your needs, design a solution that meets your requirements,
                  and implement the solution.
                </li>
          </ul>
         
        </div>
      </motion.div>
      <Footer className={styleF.footer} />
    </div>
  );
}
