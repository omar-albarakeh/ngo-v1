import React from "react";
import "./TopBar.css";
import { useTranslation } from "react-i18next";

// Assuming you have imported or passed the TopInfo data
const topInfoData = {
  address: "7 Rue de Pfastatt, 68110 Illzach, France",
  email: "contact@sospalestine.fr",
  phone1: "+33 6 34 58 82 76",
  phone2: "+33 9 51 08 24 54",
  phone3: "+33 7 83 25 53 25",
  "follow-us": "Follow us:",
};

const TopInfoBar = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: "fas fa-map-marker-alt",
      content: (
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(
            topInfoData.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="top-contact-link">
          {topInfoData.address}
        </a>
      ),
    },
    {
      icon: "fas fa-envelope",
      content: (
        <a href={`mailto:${topInfoData.email}`} className="top-contact-link">
          {topInfoData.email}
        </a>
      ),
    },
    {
      icon: "fas fa-phone",
      content: (
        <span className="phone-links">
          <a href={`tel:${topInfoData.phone1}`} className="top-contact-link">
            {topInfoData.phone1}
          </a>
          <span className="separator"> / </span>
          <a href={`tel:${topInfoData.phone2}`} className="top-contact-link">
            {topInfoData.phone2}
          </a>
          <span className="separator"> / </span>
          <a href={`tel:${topInfoData.phone3}`} className="top-contact-link">
            {topInfoData.phone3}
          </a>
        </span>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/sospalestinefr68/",
      icon: "/images/Social-Media/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sospalestine68/",
      icon: "/images/Social-Media/instagram.png",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@sospalestine1",
      icon: "/images/Social-Media/tik-tok.png",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@sospalestine68?si=9gQftfQfbCE4ROI_",
      icon: "/images/Social-Media/youtube.png",
    },
  ];

  return (
    <div className="top-bar">
      <div className="top-contact-info">
        {contactItems.map((item, index) => (
          <div key={index} className="top-contact-item">
            <i className={item.icon}></i>
            {item.content}
          </div>
        ))}
      </div>

      <div className="top-social-links">
        <span className="top-follow-label">{topInfoData["follow-us"]}</span>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="top-social-link"
            aria-label={social.name}>
            <img
              src={social.icon}
              alt={social.name}
              className="top-icon"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopInfoBar;
