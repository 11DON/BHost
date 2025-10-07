import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../components/styles/Navbar.module.css";
import styleF from "../components/styles/footer.module.css";
import customApp from "../components/styles/customApp.module.css";
import DHero from "../assets/dHero.png";
import int1 from "../assets/data1.png";
import int2 from "../assets/data2.png";
import int3 from "../assets/data3.png";
import int4 from "../assets/data4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DataManageMainPage() {
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
          <h3>Data Management</h3>
          <h4>
            <hr className={`${customApp.hr}`} />
          </h4>
          <p style={{color: "black" ,paddingTop: "10px" ,opacity: "0.6"}}>
            In the modern era of digitalization, organizations recognize the
            immense value of content and data as their most prized assets. To
            unlock the true potential of these valuable resources, analytics and
            artificial intelligence (AI) have emerged as critical components in
            the transformation process. Our expertise lies in leveraging these
            technologies to convert your data and content into actionable
            insights. With our comprehensive suite of services, we ensure that
            your content and data become invaluable assets that drive your
            organization forward. Our team of experts is dedicated to delivering
            tailored solutions that empower you to thrive in the digital age.
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
          <img src={DHero} alt="Insurance Suite" />
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={`${customApp.intContaienr} `}>
          {[
            {
              title: "Machine Learning",
              img: int1,
              alt: "Machine Learning",
              to :"/machLearnPage"
            },
            {
              title: "Content Management",
              img: int2,
              alt: "Content Management",
              to:"/contentManagePage"
            },
            {
              title: "Data Visualization [BI & Analytics]",
              img: int3,
              alt: "Data Visualization [BI & Analytics]",
              to:"/dataVisuaPage"
            },
            {
              title: "Data Integration",
              img: int4,
              alt: "Data Integration",
              to:"/dataIntePage"
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
