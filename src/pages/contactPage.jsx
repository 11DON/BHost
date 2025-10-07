import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import CloudMain from "../assets/contact.png";

import { motion } from "framer-motion";

export default function ContactPage() {
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
          <h2>Contact Info</h2>

          <div>
            <p><strong>Egypt</strong></p>
            <p>
              <i className="bi bi-geo-alt-fill me-2" style={{ color: 'black' }}></i>
              Elserag Mall, Tower 2, Entrance 3, 9th floor, Nasr City, Cairo, Egypt.
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2" style={{ color: 'black' }}></i>
              +2 01157522667
            </p>
            <hr />

            <p><strong>KSA</strong></p>
            <p>
              <i className="bi bi-geo-alt-fill me-2" style={{ color: 'black' }}></i>
              302B Al-Imam Saud Ibn Faysal Rd. Al-Malaqa District, Riyadh.
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2" style={{ color: 'black' }}></i>
              00966541884447
            </p>
            <hr />

            <a
              href="mailto:youremail@example.com?subject=Hello%20from%20P%20Systems"
              className={customApp.emailLink}
            >
              <i className="bi bi-envelope-fill me-2" style={{ color: 'black' }}></i>
              Email Us
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={customApp.heroImage}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={CloudMain} alt="Contact illustration" />
        </motion.div>
      </div>

      <Footer className={styleF.footer} />
    </div>
  );
}
