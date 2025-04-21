import React, { useState } from "react";
import "./AssistanceStats.css";

const stats = [
  {
    icon: "🍞",
    label: "Food Packages Delivered",
    count: "120,000 people",
  },
  {
    icon: "💊",
    label: "Medical Aid Provided",
    count: "85,000 people",
  },
  {
    icon: "🛖",
    label: "Temporary Shelters Established",
    count: "15,000 families",
  },
  {
    icon: "🚰",
    label: "Clean Water Access Restored",
    count: "60,000 people",
  },
  {
    icon: "🎒",
    label: "School Kits Distributed",
    count: "25,000 children",
  },
  {
    icon: "🩺",
    label: "Mobile Clinics Deployed",
    count: "200 clinics",
  },
  {
    icon: "🛏️",
    label: "Hospital Beds Supplied",
    count: "1,500 beds",
  },
  {
    icon: "👶",
    label: "Infant Nutrition Kits",
    count: "10,000 babies",
  },
  {
    icon: "🧼",
    label: "Hygiene Kits Delivered",
    count: "75,000 people",
  },
  {
    icon: "🔥",
    label: "Heating Supplies Distributed",
    count: "30,000 families",
  },
  {
    icon: "🚚",
    label: "Relief Convoys Sent",
    count: "480 trucks",
  },
  {
    icon: "💵",
    label: "Emergency Cash Support",
    count: "18,000 families",
  },
];

const CARDS_PER_SLIDE = 4;
const totalSlides = Math.ceil(stats.length / CARDS_PER_SLIDE);

const AssistanceStats = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Group cards into chunks of 4
  const groupedStats = [];
  for (let i = 0; i < stats.length; i += CARDS_PER_SLIDE) {
    groupedStats.push(stats.slice(i, i + CARDS_PER_SLIDE));
  }

  return (
    <div className="stats-container">
      <h2>Since October 9, we have provided assistance to the Palestinians</h2>
      <div className="carousel-wrapper">
        <div
          className="carousel-track-multi"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {groupedStats.map((group, groupIdx) => (
            <div className="carousel-slide-multi" key={groupIdx}>
              {group.map((item, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon">{item.icon}</div>
                  <div className="stat-text">
                    <strong>{item.label}</strong>
                    <br />
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AssistanceStats;
