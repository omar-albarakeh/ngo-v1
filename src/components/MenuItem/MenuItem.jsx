import React from "react";
import "./MenuItem.css";
import { useTranslation } from "react-i18next";
import CustomButton from "../NavBar/customButton/customButton";

const MenuItem = ({
  image,
  title,
  subtitle,
  learnMoreText,
  learnMoreLink,
  donateText,
  donateLink,
}) => {
  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-image" />
      <div className="menu-content">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-subtitle">{subtitle}</p>
        <div className="menu-buttons">
          <CustomButton title={learnMoreText} to={learnMoreLink} />
          <CustomButton title={donateText} to={donateLink} />
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const { t } = useTranslation("Menu");

  const menuItems = [
    {
      image: "/images/MenuItem/slide1.jpg",
      title: t("menu.aidAlAdha.title"),
      subtitle: t("menu.aidAlAdha.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.aidAlAdha.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide2.jpg",
      title: t("menu.sosGaza.title"),
      subtitle: t("menu.sosGaza.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.sosGaza.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide3.jpg",
      title: t("menu.zakatAlMaal.title"),
      subtitle: t("menu.zakatAlMaal.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.zakatAlMaal.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide4.jpg",
      title: t("menu.rafahEmergency.title"),
      subtitle: t("menu.rafahEmergency.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.rafahEmergency.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide5.jpg",
      title: t("menu.orphanSponsorship.title"),
      subtitle: t("menu.orphanSponsorship.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.orphanSponsorship.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
    {
      image: "/images/MenuItem/slide6.jpg",
      title: t("menu.waterForGaza.title"),
      subtitle: t("menu.waterForGaza.subtitle"),
      learnMoreText: t("menu.learnMore"),
      learnMoreLink: t("menu.waterForGaza.learnMoreLink"),
      donateText: t("menu.donateNow"),
      donateLink: "/donation",
    },
  ];

  return (
    <>
      <h1 className="menu-heading">{t("menu.heading")}</h1>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            learnMoreText={item.learnMoreText}
            learnMoreLink={item.learnMoreLink}
            donateText={item.donateText}
            donateLink={item.donateLink}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
