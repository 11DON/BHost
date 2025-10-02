import React, { useState } from "react";
import "../components/styles/lastestCustomers.css";

import client1 from "../assets/logo1.png";
import client2 from "../assets/logo2.png";
import client3 from "../assets/logo3.png";
import client4 from "../assets/logo4.png";
import client5 from "../assets/logo5.png";
import client6 from "../assets/logo6.png";
export default function LatesCustomers() {
  const clients = [
    { name: "Client 1", img: client1 },
    { name: "Client 2", img: client2 },
    { name: "Client 3", img: client3 },
    { name: "Client 4", img: client4 },
    { name: "Client 5", img: client5 },
    { name: "Client 6", img: client6 },
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleLogoClick = (index) => {
    setActiveIndex(index);
    setShowCarousel(true);
  };

  return (
    <div className="clients-section">
      <h2>Our Valued Customers</h2>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client.img}
            alt={client.name}
            className="client-logo"
            onClick={() => handleLogoClick(index)}
          />
        ))}
      </div>

      {/* Carousel Modal */}
      {showCarousel && (
        <div className="carousel-overlay" onClick={() => setShowCarousel(false)}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="carousel-prev"
              onClick={() => setActiveIndex((activeIndex - 1 + clients.length) % clients.length)}
            >
              &#10094;
            </button>
            <img src={clients[activeIndex].img} alt={clients[activeIndex].name} />
            <button
              className="carousel-next"
              onClick={() => setActiveIndex((activeIndex + 1) % clients.length)}
            >
              &#10095;
            </button>
            <p>{clients[activeIndex].name}</p>
            <button className="carousel-close" onClick={() => setShowCarousel(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

