import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection2.css";

const HeroSection = () => {
  const { t } = useTranslation("hero2");

  return (
    <section className="hero-sectionB">
      <div className="overlayB">
        <div className="hero-contentB">
          <h1 className="hero-titleB">{t("title")}</h1>
          <p className="hero-descriptionB">
            {t("description.part1")} <strong>{t("description.part2")}</strong>{" "}
            {t("description.part3")} <strong>{t("description.part4")}</strong>
          </p>
          <button
            className="hero-buttonB"
            onClick={() => alert(t("button.alert"))}>
            {t("button.text")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
