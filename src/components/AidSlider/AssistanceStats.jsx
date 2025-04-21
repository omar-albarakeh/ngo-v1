import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./AssistanceStats.css";

const stats = [
  { icon: "🍞", key: "food" },
  { icon: "💊", key: "medical" },
  { icon: "🛖", key: "shelter" },
  { icon: "🚰", key: "water" },
  { icon: "🎒", key: "schoolKits" },
  { icon: "🩺", key: "mobileClinics" },
  { icon: "🛏️", key: "hospitalBeds" },
  { icon: "👶", key: "infantNutrition" },
  { icon: "🧼", key: "hygieneKits" },
  { icon: "🔥", key: "heatingSupplies" },
  { icon: "🚚", key: "reliefConvoys" },
  { icon: "💵", key: "cashSupport" },
];

const CARDS_PER_SLIDE = 4;

const AssistanceStats = () => {
  const { t } = useTranslation("sosgaza");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Group the stats into chunks of 4
  const groupedStats = [];
  for (let i = 0; i < stats.length; i += CARDS_PER_SLIDE) {
    groupedStats.push(stats.slice(i, i + CARDS_PER_SLIDE));
  }

  const totalSlides = groupedStats.length;

  return (
    <div className="stats-container">
      <h2>{t("assistanceStats.title")}</h2>
      <div className="carousel-wrapper">
        <div
          className="carousel-track-multi"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${100 * totalSlides}%`,
          }}>
          {groupedStats.map((group, groupIdx) => (
            <div className="carousel-slide-multi" key={groupIdx}>
              {group.map((item, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon">{item.icon}</div>
                  <div className="stat-text">
                    <strong>
                      {t(`assistanceStats.stats.${item.key}.label`)}
                    </strong>
                    <br />
                    {t(`assistanceStats.stats.${item.key}.count`)}
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
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AssistanceStats;
