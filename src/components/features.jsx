import { useState, useRef, useEffect } from "react";
import dataManagement from "../assets/dataMang.png";
import integration from "../assets/intg.png";
import appDevelopment from "../assets/appDev.png";
import manageService from "../assets/mangServ.png";
import "../components/styles/features.css";
import appDev1 from "../assets/appDev1.png";
import appDev2 from "../assets/appDev2.png";
import appDev3 from "../assets/appDev3.png";
import appDev4 from "../assets/appDev4.png";
import appDev5 from "../assets/appDev5.png";
import intg1 from "../assets/intg1.png";
import intg2 from "../assets/intg2.png";
import intg3 from "../assets/intg3.png";
import intg4 from "../assets/intg4.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
export default function Features() {
  const featureData = [
    {
      title: "Application Development",
      image: appDevelopment,
      details: `
        <p> Systems provides Applications Development that reflect Multiple Systems which provide the customers with full control to support their custom processes and unified cloud to access multiple systems.</p>
        <p>We build modern and cloud-native applications using the latest languages, databases and tools.</p>`,
      icons: [
    { src: appDev1, label: "Custom Digital Applications" },
    { src: appDev2, label: "Cloud Native Applications" },
    { src: appDev3, label: "Chatbots & Digital Assistants" },
    { src: appDev4, label: "Mobile Applications" },
    { src: appDev5, label: "Oracle Forms Modernization" },
      ]
    },

    {
      title: "Integration", image: integration,
      details: `<p> Systems integration services facilitate the connection and automation of end-to-end processes by linking various
       applications and systems. This enables the seamless collaboration of individual applications, allowing them to work harmoniously together. 
       Through the merging and optimization of data and workflows across multiple software applications, organizations can achieve integrations that enhance and modernize their infrastructures,
        ultimately supporting more agile business operations.</p>` ,
      icons: [
        { src: intg1, label: "Application Integration" },
        { src: intg2, label: "Identity Integration" },
        { src: intg3, label: "Process Automation" },
        { src: intg4, label: "Mobile Applications" },
      ]
    },


    {
      title: "Data Management", image: dataManagement, details: `<p>In the modern era of digitalization, organizations recognize the immense value of content and data as their most prized assets.
       To unlock the true potential of these valuable resources, 
      analytics and artificial intelligence (AI) have emerged as critical components in the transformation process.
       Our expertise lies in leveraging these technologies to convert your data and content into actionable insights. 
       With our comprehensive suite of services, we ensure that your content and data become invaluable assets that drive your organization forward.
        Our team of experts is dedicated to delivering tailored solutions that empower you to thrive in the digital age.</p>`,
      icons: [
        { src:d1, label: "Data Integration" },
        { src:d2, label: "Content Management" },
        { src:d3, label: "Data Visualization" },
        { src:d4, label: "Machine Learning" },
      ]
    },


    {
      title: "Manage Service", image: manageService, details: `<p>At I Sources, we understand the importance of seamless operations,
       optimal performance, and continuous innovation. That's why we offer a comprehensive suite of managed services to support your organization's technology needs.
        Whether you require ongoing support, onboarding skilled calibers/talents, or training programs,
         we have got you covered. Choose from the following managed services tailored to meet your specific requirements:</p>`,
      icons: [
        { src: m1, label: "Support" },
        { src: m2, label: "Outsourcing" },
        { src: m3, label: "Training" },
      ]
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [direction, setDirection] = useState("right");
  const cardsRef = useRef([]);

  const handleLearnMore = (index) => {
    const card = cardsRef.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.right;
      const panelWidth = 700; // match CSS max-width

      if (spaceRight < panelWidth) {
        setDirection("left");
      } else {
        setDirection("right");
      }
    }

    setActiveIndex(index);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
    }, 300); // match CSS animation
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        activeIndex !== null &&
        cardsRef.current[activeIndex] &&
        !cardsRef.current[activeIndex].contains(e.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeIndex]);

  return (
    <div className="features-wrapper">
      {activeIndex !== null && <div className="page-dim" onClick={handleClose}></div>}

      <div className="features-container">
        {featureData.map((feature, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`feature-card ${isActive ? "active-card" : ""}`}
              style={{ backgroundImage: `url(${feature.image})` }}
            >
              <h5>{feature.title}</h5>
              <button onClick={() => handleLearnMore(index)}>Learn More</button>

              {isActive && (
                <div
                  className={`book-page ${direction} ${isClosing ? "closing" : "opening"
                    }`}
                >
                  <button className="close-btn" onClick={handleClose}>
                    ×
                  </button>
                  <h3>{feature.title}</h3>
                  <div
                    className="book-content"
                    dangerouslySetInnerHTML={{ __html: feature.details }}
                  />
                  {feature.icons&&feature.icons.length >0 &&(
                    <div className="icon-list">
                      {feature.icons.map((icon,i)=>(
                        <div key={i} className="icon-item">
                           <img src={icon.src} alt={icon.label} />
                           <p>{icon.label}</p> 
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
