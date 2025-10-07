import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.png";
import tech4 from "../assets/tech4.png";
import tech5 from "../assets/tech5.jpg";
import tech6 from "../assets/tech6.png";
import oracle from "../assets/ora.png";
import micro from "../assets/micro.png";
import v1 from "../assets/vend1.png";
import v2 from "../assets/vend2.png";
import v3 from "../assets/vend3.png";



import { motion } from "framer-motion";

export default function TechnologiesPage() {
  return (
    <div>
      <div className={`${customApp.biggerHero} ${styles.reaya}`}>
        <Navbar />

        {/* Left Content */}
        <motion.div
          className={customApp.cloudHero}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Technologies</h2>

          <div>
            <p>
              <img src={tech1} className={`${customApp.techImg}`} alt="" />
              <img src={tech2} className={`${customApp.techImg}`} alt="" />{" "}
              <img src={tech3} className={`${customApp.techImg}`} alt="" />
              <img src={tech4} className={`${customApp.techImg}`} alt="" />{" "}
              <img src={tech5} alt="" />{" "}
              <img src={tech6} className={`${customApp.techImg}`} alt="" />
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={customApp.cloudHero}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h2>Vendors</h2>

          <div>
            <p>
              <img src={oracle} className={`${customApp.techImg}`} alt="" />
              <img src={micro} className={`${customApp.techImg}`} alt="" />{" "}
              <img src={v1} className={`${customApp.techImg}`} alt="" />
              <img src={v2} className={`${customApp.techImg}`} alt="" />{" "}
              <img src={v3} alt="" />{" "}
            </p>
          </div>
        </motion.div>
      </div>

      <Footer className={styleF.footer} />
    </div>
  );
}
