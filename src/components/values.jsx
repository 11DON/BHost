import { useEffect, useRef } from "react";
import values from "../assets/values.png";
import "../components/styles/values.css";

export default function Values() {
  const valueItems = [
    { title: "Planning", text: "We plan for every opportunity very carefully before getting engaged"},
    { title: "People", text: "We care about our employees, customers, vendors and partners." },
    { title: "Productivity", text: "Our customer gets an added value in a very short time." },
    { title: "Professionalism", text: "We follow software best practices, standards, and methodologies during the whole project lifecycle." },
    { title: "Passion", text: "We are passionate about technology & what we do, delivering our customers added value and excellent service(s)." },
  ];

  const columnsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    columnsRef.current.forEach(col => {
      if (col) observer.observe(col);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="values-section">
      <h1 className="title">P SYSTEMS Values</h1>
      <img className="values-image" src={values} alt="Values" />
      <div className="values-row">
        {valueItems.map((item, index) => (
          <div
            key={index}
            ref={el => columnsRef.current[index] = el}
            className={`values-column value-${index}`}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
