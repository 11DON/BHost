import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import abt1 from "../assets/abt1.png";
import abt2 from "../assets/abt2.png";
import abts1 from "../assets/abts1.png";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import abts2 from "../assets/abts2.png";
import styles from "../components/styles/Navbar.module.css";
import InquiryModal from "../components/inquiryModal";

export default function AboutPage() {
    
  const whyRef = useRef(null);
  const [showInquiry, setShowInquiry] = useState(false);
  // motion value that we'll update from window scroll for a continuous parallax
  const y = useMotionValue(0);
  // smooth the motion value with a spring for less jank
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  useEffect(() => {
    const onScroll = () => {
      // increase multiplier for stronger parallax (0.35)
      y.set(-window.scrollY * 0.1);
    };
    // initialize and attach
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);
  return (
    <div className={`${styles.reaya}`}>
      <CustomNavbar />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div
          className="container-fluid"
          style={{
            paddingTop: "10rem",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%230099ff' fill-opacity='1' d='M0,192L18.5,160C36.9,128,74,64,111,69.3C147.7,75,185,149,222,160C258.5,171,295,117,332,101.3C369.2,85,406,107,443,117.3C480,128,517,128,554,117.3C590.8,107,628,85,665,85.3C701.5,85,738,107,775,117.3C812.3,128,849,128,886,128C923.1,128,960,128,997,144C1033.8,160,1071,192,1108,176C1144.6,160,1182,96,1218,64C1255.4,32,1292,32,1329,32C1366.2,32,1403,32,1422,32L1440,32L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z'></path></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="container d-flex flex-column flex-lg-row align-items-center gap-4">
            <div style={{ flex: 1 }}>
              <h1 className="mb-3" style={{ color: "white" }}>
                About ISources
              </h1>
              <hr
                style={{
                  width: "60px",
                  height: "3px",
                  background: "#5a4fcf",
                  border: "none",
                }}
              />
              <p style={{ fontSize: "1.05rem", color: "#333" }}>
                At <span style={{ color: "#3366ff" }}>I Sources</span>, we’re
                more than a technology company — we’re a team of people who love
                what we do. Our passion lies in helping businesses grow and
                excel by making the most of what digital technology can offer.
              </p>
              <p style={{ color: "#555" }}>
                Wth{" "}
                <span style={{ color: "#3366ff" }}>
                  over 15 years of experience
                </span>
                , a strong presence in{" "}
                <span style={{ color: "#3366ff" }}>Egypt and KSA</span>, and a
                proven track record of delivering successful projects across{" "}
                <span style={{ color: "#3366ff" }}>more than 10 countries</span>
                , we’ve built deep expertise in helping organizations enhance
                its operations and succeed through technology. We don’t just
                write code — we solve real business problems with practical,
                intelligent solutions built around two core pillars:{" "}
                <span style={{ color: "#3366ff" }}>
                  Intelligent Process Automation
                </span>{" "}
                and{" "}
                <span style={{ color: "#3366ff" }}>
                  Intelligent Systems Integration.
                </span>
              </p>
              <p style={{ fontSize: "1.05rem", color: "#333" }}>
                In the world of{" "}
                <span style={{ color: "#3366ff" }}>Process Automation</span>, we
                turn manual procedures and workflows into smooth, efficient
                digital experiences either through custom applications, smart
                AI-driven tools, or robust business process platforms.
              </p>
              <p style={{ color: "#555" }}>
                When it comes to{" "}
                <span style={{ color: "#3366ff" }}> Systems Integration</span>,
                we focus on connecting the dots — not just between platforms and
                data, but between the people and tools that drive your business.
                We believe integration isn’t just technical; it’s strategic.
                It’s about bringing everything together believing that the best
                only come when{" "}
                <span style={{ color: "#3366ff" }}>
                  Integrating People, Data and Technology.
                </span>
              </p>
              <p style={{ fontSize: "1.05rem", color: "#333" }}>
                At our core, we’re technologists who love creating solutions
                that make a difference. We’re always learning, always
                practicing, and always building.
              </p>
              <p style={{ color: "#555" }}>
                Everything we do is rooted in our core belief that real impact
                comes when you:
              </p>
              <p style={{ color: "#3366ff" }}>Automate. Integrate. Innovate.</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <motion.img
                  src={abt2}
                  alt="Technology company"
                  style={{ maxWidth: "520px", width: "100%" }}
                  animate={{
                    y: [0, -15, 0], // move up then back down
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission / Vision */}
      <div className="container py-5">
        <div className="row gy-4">
          {/* Mission */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-4 shadow-sm h-100"
              style={{ borderRadius: 8 }}
            >
              <div className="d-flex align-items-start gap-3">
                <img src={abts1} alt="mission" style={{ width: 64 }} />
                <div>
                  <h4>Our Mission</h4>
                  <p>
                    To intelligently digitalize and enhance our customers’
                    business operations through Process Automation and Systems
                    Integration — helping them grow and excel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-4 shadow-sm h-100"
              style={{ borderRadius: 8 }}
            >
              <div className="d-flex align-items-start gap-3">
                <img src={abts2} alt="vision" style={{ width: 64 }} />
                <div>
                  <h4>Our Vision</h4>
                  <p>
                    To be a globally recognized and highly valued technology
                    brand for Intelligent Process Automation and Intelligent
                    Systems Integration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div
        ref={whyRef}
        className="container py-4"
        style={{
          position: "relative",
          background: "white",
          borderRadius: 12,
          padding: "2rem",
          overflow: "visible",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="mb-4">Why I Sources?</h3>
            <div className="row">
              <div className="col-sm-6 col-md-9 mb-3">
                <div className="p-3">
                  <i className="bi bi-lightning-charge-fill" style={{ fontSize: 48, color: "#5a4fcf" }}></i>
                  <h5 className="mt-2">Innovative Solution</h5>
                  <p className="text-muted">
                    Your organization relies on IT systems in everything. We make
                    sure to follow the latest trends of technology to make
                    businesses more agile through innovative use of technology.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-9 mb-3">
                <div className="p-3">
                  <i className="bi bi-award-fill" style={{ fontSize: 48, color: "#5a4fcf" }}></i>
                  <h5 className="mt-2">High Quality</h5>
                  <p className="text-muted">Through all the different challenges, we always deliver the highest quality of solutions and services.</p>
                </div>
              </div>

              <div className="col-sm-6 col-md-9 mb-3">
                <div className="p-3">
                  <i className="bi bi-clock-fill" style={{ fontSize: 48, color: "#5a4fcf" }}></i>
                  <h5 className="mt-2">Deliver On Time</h5>
                  <p className="text-muted">We respond rapidly to changing customer demands by delivering new products and services that meet their needs on time.</p>
                </div>
              </div>

              <div className="col-sm-6 col-md-9 mb-3">
                <div className="p-3">
                  <i className="bi bi-cash-stack" style={{ fontSize: 48, color: "#5a4fcf" }}></i>
                  <h5 className="mt-2">Cost Effective</h5>
                  <p className="text-muted">We give you the best value and benefits of technology you expect from a leading service provider at a lower cost.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-md-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={abt1}
                alt="Technology company"
                style={{ maxWidth: 620, width: "100%", y: springY ,paddingTop:"10rem"}}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="container-fluid py-5"
        style={{ background: "linear-gradient(90deg,#5a4fcf,#6a5eff)" }}
      >
        <div className="container text-center text-white">
          <h3>Your business needs a trusted Technology Partner?</h3>
          <p>
            Our services range from strategic IT consulting to long-term
            operational support.
          </p>
          <button onClick={() => setShowInquiry(true)} className="btn btn-light btn-lg">
            Send Inquiry
          </button>
          <InquiryModal show={showInquiry} onHide={() => setShowInquiry(false)} />
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
