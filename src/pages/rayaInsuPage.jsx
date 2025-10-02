import Navbar from "../components/navbar";
import reayaStyles from "../components/styles/reayaInsuPage.module.css";
import styles from "../components/styles/Navbar.module.css";
import suite from "../assets/suite.png";
import { motion } from "framer-motion"; 

export default function RayaInsurance() {
    return (
        <div>
           
            <div className={`${reayaStyles.hero} ${styles.reaya}`}>
                 <Navbar />
                {/* Left Content */}
                <motion.div 
                    className={reayaStyles["hero-content"]}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1>Reaya</h1>
                    <h3>Insurance Family</h3>
                    <p>
                        A Family of Insurance business applications that help all Insurance 
                        businesses evolve and improve their performance.
                    </p>
                </motion.div>

                {/* Right Image */}
                <motion.div 
                    className={reayaStyles["hero-image"]}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={suite} alt="Insurance Suite" />
                </motion.div>
            </div>
        </div>
    );
}
