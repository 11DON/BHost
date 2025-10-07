import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import cdMain from "../assets/intgMain.png";
import int1 from "../assets/int1.png";
import int2 from "../assets/int2.png";
import int3 from "../assets/int3.png";
import int4 from "../assets/int4.png";
import int4lt from "../assets/intalt.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function IntgMainPage() {
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
          <h3>Integration Services</h3>
          <h4>
            <hr className={`${customApp.hr}`} />
          </h4>
          <p>
            I Sources integration services facilitate the connection and
            automation of end-to-end processes by linking various applications
            and systems. This enables the seamless collaboration of individual
            applications, allowing them to work harmoniously together. Through
            the merging and optimization of data and workflows across multiple
            software applications, organizations can achieve integrations that
            enhance and modernize their infrastructures, ultimately supporting
            more agile business operations.
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
        <div className={`${customApp.intContaienr} `}>
          {[
            {
              title: "Cloud Integration",
              img: int1,
              alt: "Cloud Integration",
              to: "/cloudIntegPage",
            },
            {
              title: "Identity Integration",
              img: int2,
              alt: "Identity Integration",
              to: "/identityIntegPage",
            },
            {
              title: "Process Automation",
              img: int3,
              alt: "Process Automation",
              to: "/pautoPage",
            },
            {
              title: "Application Integration",
              img: int4lt,
              alt: "Application Integration",
              to: "/integPage",
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
