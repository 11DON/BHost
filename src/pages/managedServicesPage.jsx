import Navbar from "../components/navbar";
import styles from "../components/styles/Navbar.module.css";
import customApp from "../components/styles/customApp.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ofor from "../assets/mService.png";
import int1 from "../assets/ser1.png";
import int2 from "../assets/ser2.png";
import int3 from "../assets/ser3.png";
import Footer from "../components/footer";
import styleF from "../components/styles/footer.module.css";

export default function ManagedServicesPage() {
  return (
    <div>
      <div className={`${customApp.biggerHero} ${styles.reaya}`}>
        <Navbar />

        {/* Left Content */}
        <motion.div
          className={customApp["cloudHero"]}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Managed Services</h2>
          <p>
            At I Sources, we understand the importance of seamless operations,
            optimal performance, and continuous innovation. That's why we offer
            a comprehensive suite of managed services to support your
            organization's technology needs. Whether you require ongoing
            support, onboarding skilled calibers/talents, or training programs,
            we have got you covered. Choose from the following managed services
            tailored to meet your specific requirements:
          </p>

          <h3 style={{ fontSize: "1.7rem", opacity: "0.6",color:"black" }}>Support:</h3>
          <ul>
            <li>
              You can offload the burden of day-to-day IT operations and focus
              on driving your business forward. Our team of experts is equipped
              with the knowledge and experience to handle a wide range of
              technology challenges, ensuring that your systems run smoothly and
              your infrastructure remains secure and up to date.
            </li>
          </ul>

          <h3 style={{ fontSize: "1.7rem", opacity: "0.6",color:"black" }}>Outsourcing:</h3>
          <ul>
            <li>
              Onboarding outsourced calibers provides the flexibility to scale
              your team based on project requirements without the burden of
              managing a large, permanent workforce during slow periods.in
              addition to gaining access to a pool of skilled professionals who
              can contribute valuable insights and knowledge to your team.
            </li>
          </ul>

          <h3 style={{ fontSize: "1.7rem", opacity: "0.6",color:"black" }}>Training:</h3>
          <ul>
            <li>
              as a technology solutions provider, we must keep updated with the
              new technology trends. Our expert engineers can empower your team
              with the latest skills and knowledge, customized at your needs;
              ensuring that your team will be equipped with hands-on experience
              that contribute to your organization's success.
            </li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={customApp["hero-image"]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={Ofor} alt="Managed Services" />
        </motion.div>

      </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={`${customApp.serContainer}`}>
                {[
                  {
                    title: "Outsourcing",
                    img: int1,
                    alt: "Outsourcing",
                    to:"/outsourcingPage"
                  },
                  {
                    title: "Support",
                    img: int2,
                    alt: "Task Management",
                    to:"/supportPage"
                  },
                  {
                    title: "Training",
                    img: int3,
                    alt: "Training",
                    to:"/trainPage"
                  },
                 
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
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

      <Footer className={styleF.footer} />
    </div>
  );
}
