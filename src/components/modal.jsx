// Modal.js
import React from "react";
import "./styles/modal.css";

export default function Modal({ show, onClose, title, content, icons }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="modal-icons">
          {icons && icons.map((icon, i) => (
            <div key={i} className="icon-item">
              <img src={icon.img} alt={icon.label} />
              <p>{icon.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
