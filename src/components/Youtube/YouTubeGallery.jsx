import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useTranslation } from "react-i18next";
import "./YouTubeGallery.css";
import videoData from "./videoData.json"; // Import the video data from the JSON file

const YouTubeCard = ({ videoId, title, description }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="youtube-card">
      <div className="card-video">
        <ReactPlayer url={videoUrl} width="100%" height="180px" controls />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const YouTubeGallery = () => {
  const scrollRef = useRef();
  const { t } = useTranslation("Youtube");

  const [translatedData, setTranslatedData] = useState([]);

  useEffect(() => {
    // Translate titles and descriptions using the i18n translation
    const translatedVideos = videoData.map((video, idx) => ({
      ...video,
      title: t(`videos.${idx}.title`),
      description: t(`videos.${idx}.description`),
    }));
    setTranslatedData(translatedVideos);
  }, [t]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="youtube-gallery">
      <h2 className="video-heading">{t("youtubeUpdates")}</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>

        <div className="scroll-wrapper">
          <div className="youtube-card-list" ref={scrollRef}>
            {translatedData.map((video, idx) => (
              <YouTubeCard key={idx} {...video} />
            ))}
          </div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default YouTubeGallery;
