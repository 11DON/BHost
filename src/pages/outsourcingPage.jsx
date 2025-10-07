import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import CloudMain from "../assets/out.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OutsourcingPage() {
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
          <h2>Outsourcing</h2>
          <p>
            If your IT team is struggling to keep up with business growth and
            spending too much time managing daily activities with not enough
            time to provide strategic value back to the business then one of the
            ways to overcome these challenges is through outsourcing. I Sources
            technology outsourcing services will allow you to run more flexible,
            agile and scalable IT operation, it can re-energies your IT team,
            freeing up more of their time to spend on strategic projects. I Sources provides technology outsourcing services, If you are about
            to kick-start an important project, or if you need to up-skill your
            technical team in a new technology or even if you got an issue
            that’s holding your business back we will provide you with best
            calibers, professionals and experts when it really matters.
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
          <h2>
            We Enrich Your Experience With Our Technology Outsourcing Services
          </h2>
          <hr />
          <p>
            With our professional process of skills evaluation, rest assure that
            I Sources will select to you the best IT engineers your business
            needs. Outsourcing Models:
          </p>
          <ul>
            <li>
                Onsite outsourcing for individuals.

            </li>
            <li>
                Remote outsourcing for individuals.

            </li>
            <li>
                Onsite outsourcing for a complete project team.

            </li>
            <li>
                Remote outsourcing for a complete project team.

            </li>
          </ul>
        </div>
      </motion.div>

      <Footer className={styleF.footer} />
    </div>
  );
}
