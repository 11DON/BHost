import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import crmstyleFrom from "../components/styles/customApp.module.css";
import cdMain from "../assets/cdMain.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cu1 from "../assets/cu1.png";
import cu2 from "../assets/cu2.png";
import cu3 from "../assets/cu3.png";

export default function CustomDigitalApp() {
  const sections = [
    {
      title: "Technologies",
      img: cu1,
      alt: "Technologies",
      points: [
        "Java & JEE",
        "Oracle ADF",
        "Oracle APEX",
        "JavaScript (NodeJS, PrimeFaces, AngularJS)",
      ],
    },
    {
      title: "Offerings",
      img: cu2,
      alt: "Offerings",
      points: [
        "Application Modernization",
        "Solution Architecture design",
        "Application Development",
        "Automate and integrate your human work procedures and workflows",
        "Automate and integrate your human work procedures and workflows",
        "Business Reports and KPIs development",
      ],
    },
    {
      title: "Align with Emerging Trends",
      img: cu3,
      alt: "Align with Emerging Trends",
      points: [
        "Latest development toolss/languages/frameworks",
        "Cloud ready and Cloud Native applications",
        "Function-as-a-Service",
        "Responsive Designs",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className={`${crmstyleFrom.biggerHero} ${styles.reaya}`}>
        <Navbar />

        {/* Left Content */}
        <motion.div
          className={crmstyleFrom["hero-content"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/applDevPage">
            <h4>Custom Digital Applications</h4>
          </Link>
          <h3 id={crmstyleFrom.Apptitle}>Custom Digital Applications</h3>
          <p style={{ fontSize: "0.9rem" }}>
            One of I Sources' prime specialties is in innovating custom digital
            applications. We help businesses evolve and transform digitally
            using cutting-edge technologies. Whether building a new application
            or modernizing an existing one, our focus is delivering
            high-quality, timely solutions tailored to each client’s needs.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={crmstyleFrom["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={cdMain} alt="Custom Digital Applications" />
        </motion.div>
      </div>

      {/* Technologies / Features Section */}
      <div id={`${crmstyleFrom.cutsomContent}`}>
        {sections.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={crmstyleFrom.card}
          >
            <img
              src={item.img}
              alt={item.alt}
              className={crmstyleFrom.gridImg}
            />
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li id={`${crmstyleFrom.points}`} key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Footer className={styleF.footer} />
    </div>
  );
}
