import React, { useEffect, useState } from "react";

import int from "../assets/1.png";
import aut from "../assets/2.png";
import ino from "../assets/3.png";
import "../components/styles/bannerContent.css";
export default function BannerContent(){
   const fullTitle = "Automate · Integrate · Innovate";
  const [typedTitle, setTypedTitle] = useState("");
  const [showImages, setShowImages] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Typing effect for title
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, index + 1));
      index++;
      if (index === fullTitle.length) {
        clearInterval(interval);
        // Show images after title finishes
        setShowImages(true);
      }
    }, 100); // 100ms per character

    return () => clearInterval(interval);
  }, []);

  // Show subtitle after images animation
  useEffect(() => {
    if (showImages) {
      const timeout = setTimeout(() => setShowSubtitle(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [showImages]);
    return (
        <div>
            <div className="bannerContent">
        {/* Images above text */}
         <div className="bannerImg">
        <img src={int} alt="Integration" className={showImages ? "slideIn" : ""} />
        <img src={aut} alt="Automation" className={showImages ? "slideIn delay1" : ""} />
        <img src={ino} alt="Innovation" className={showImages ? "slideIn delay2" : ""} />
      </div>

        {/* Title + subtitle */}
         <h1 className={`bannerTitle ${typedTitle ? "loaded" : ""}`}>{typedTitle}</h1>
              {showSubtitle && <p className="bannerSubtitle slideUp">{/* Subtitle */}Integrating People, Data and Technology</p>}
      </div>
        </div>
    )
}