import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import mobApp from "../assets/mobApp.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MobAppPage() {
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
          <Link to="/applDevPage">
            <h4>Applications Development</h4>
          </Link>
          <h2>Mobile Applications</h2>
          <p>
            Applications Development Mobile Applications Extend your
            organization’s Apps to Mobile Mobile is changing every aspect of our
            world, and has quickly become the first screen in our lives.
            <hr className={`${customApp.apphr}`} />
            For the past decade, most decision makers realized the fact that
            they have to take the approach of deploying mobile technologies.
            According to the United Nations researches, six of the seven billion
            people worldwide now have mobile phones. Which is enabling new
            business models and transforming industries. For ex. Uber has 100
            million of users who log in only with their mobile devices. For many
            businesses, mobility is now the primary way to interact and get
            things done.I Sources can help you transform your business to mobile
            through a mobile applications.
            <hr className={`${customApp.apphr}`} />I Sources simplifies the
            development of mobile applications to meet your business needs.
            Whether you’re building new mobilr apps or extending backend
            systems, I Sources provides the applications, security and analytics
            that you can rely on
          </p>
          <p>
            We help you build apps that connect to any of your existing back-end
            systems while maintaining the level of security you that you expect:
          </p>
          <p>I Sources Mobile Applications Development Offerings:</p>
          <ul>
            <li>
              Unified platform that can centralize multichannel development
              forweb applications, mobile, and Chabot.
            </li>
            <li>Mobile Analytics for your environment and Apps performance.</li>
            <li>Native and cross platform development.</li>
          </ul>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={mobApp} alt="Insurance Suite" />
        </motion.div>
      </div>

      <Footer className={styleF.footer} />
    </div>
  );
}
