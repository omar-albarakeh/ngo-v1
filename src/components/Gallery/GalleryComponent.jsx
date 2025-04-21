import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./Gallerycards";
import campaigns from "./campaigns";
import "./Gallery.css";

const Gallery = () => {
  const { t } = useTranslation("Gallery");
  const [activeTab, setActiveTab] = useState("2025");
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);

  const handleCardClick = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImages]);

  return (
    <section className="gallery-section" id="projects">
      <div className="container">
        <h2>{t("campaigns.title")}</h2>
        <p>{t("campaigns.subtitle")}</p>

        <ul className="tab-nav">
          {Object.keys(campaigns).map((year) => (
            <li
              key={year}
              className={activeTab === year ? "active" : ""}
              onClick={() => setActiveTab(year)}>
              {year}
            </li>
          ))}
        </ul>

        <div className="tab-content">
          <div className="project-grid">
            {campaigns[activeTab].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.images[0]}
                onClick={() => handleCardClick(project.images)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImages.length > 0 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>

            <button className="nav-arrow left" onClick={goToPrev}>
              &#10094;
            </button>
            <button className="nav-arrow right" onClick={goToNext}>
              &#10095;
            </button>

            <div className="modal-image">
              <img
                src={selectedImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
              />
              <p className="image-counter">
                {currentIndex + 1} {t("of")} {selectedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
