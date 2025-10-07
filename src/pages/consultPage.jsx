import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import CloudMain from "../assets/consult.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ConsultingPage() {
  const sections = [
    {
      title: "Digital Transformation Planning",
      icon: "bi-gear-fill",
      alt: "Digital Transformation Planning",
      points:
        "We assist organizations in formulating effective strategies and plans for their digital transformation initiatives. Our experts work closely with you to understand your business objectives and develop a roadmap for successful digital transformation",
    },
    {
      title: "Modernization Roadmap",
      icon: "bi-map",
      alt: "Modernization Roadmap",
      points:
        "We help you navigate the complex landscape of digital transformation by creating detailed roadmaps. These roadmaps provide step-by-step guidance on how to implement various digital initiatives, ensuring a smooth transition and minimizing disruptions.",
    },
    {
      title: "Platform Assessments",
      icon: "bi-file-earmark-check",
      alt: "Platform Assessments",
      points:
        "as a critical stage in the software development life cycle (SDLC). We can help our customers have their requirements gathered, analyzed, modeled, and documented.",
    },
    {
      title: "Software Analysis",
      icon: "bi-search",
      alt: "Software Analysis",
      points:
        "Our team conducts thorough assessments of your existing digital environment. This assessment enables us to provide tailored recommendations to enhance the performance and efficiency of your digital platforms.",
    },
    {
      title: "Solution Architecture",
      icon: "bi-diagram-3",
      alt: "Solution Architecture",
      points:
        "We are specialized in designing robust and scalable solution architectures to support your digital transformation goals. Our architects create comprehensive blueprints that outline the structure, components, and integration points of your digital solutions. This ensures a cohesive and future-proof architecture that aligns with your business objectives.",
    },
  ];

  // helper to render each section with an icon instead of an image
  function renderSections() {
    return (
      <div className="container py-5">
        <div
          className="d-flex"
          style={{
            gap: "1.5rem",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            paddingBottom: "0.5rem",
          }}
        >
          {sections.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="card p-3"
              style={{
                flex: "1 1 220px",
                minWidth: 220,
                border: "none",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              <div className=" align-items-start">
                <div style={{ fontSize: 40, color: "#5a4fcf" }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <div>
                  <h5>{s.title}</h5>
                  <p className="text-muted">{s.points}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
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
          <h2>Consultation Services</h2>
          <p>
            We help our customers solve their complex business challenges and
            accelerate your business practices through technology adoption with
            proven methodologies. We provide our customers with specialized
            services for increased efficiency and visibility that support your
            digital transformation journey.
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
      {renderSections()}

      <Footer className={styleF.footer} />
    </div>
  );
}
