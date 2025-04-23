import React from "react";
import { useTranslation } from "react-i18next";
import "./ZakatCalculator.css";
import CustomButton from "../NavBar/customButton/customButton";

const ZakatCalculator = () => {
  const { t } = useTranslation("zakatCalculator");

  return (
    <div className="zakat-section">
      <div className="zakat-content">
        <h2>{t("zakatCalculator.heading")}</h2>
        <p>
          <strong>{t("zakatCalculator.paragraph1.bold")}</strong>{" "}
          {t("zakatCalculator.paragraph1.normal")}
        </p>
        <p>{t("zakatCalculator.paragraph2")}</p>

        <div className="aid-buttons">
          <CustomButton titleKey="nav.zakat" to="/zakat-al-maal" />
          <CustomButton titleKey={t("nav.donateNow")} to="/donation" />
        </div>
      </div>
      <div className="zakat-triangle">
        <img src="/images/HeroSlider/slide2.webp" alt="Child counting coins" />
      </div>
    </div>
  );
};

export default ZakatCalculator;
