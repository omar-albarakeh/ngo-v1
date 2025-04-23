import React from "react";
import { useTranslation } from "react-i18next";
import "./AidAdhaSection.css";
import CustomButton from "../NavBar/customButton/customButton";

const AidAdhaSection = () => {
  const { t } = useTranslation("adha");

  return (
    <div className="aid-section">
      <div className="aid-triangle">
        <img
          src="/images/FeatureSectionB/udhiyah.jpg"
          alt="Qurbani distribution"
        />
      </div>
      <div className="aid-content">
        <h2>{t("aidAdha.heading")}</h2>
        <p>
          <strong>{t("aidAdha.paragraph1.bold")}</strong>{" "}
          {t("aidAdha.paragraph1.normal")}
        </p>
        <p>{t("aidAdha.paragraph2")}</p>

        <div className="aid-buttons">
          <CustomButton titleKey={t("aidAdha.button")} to="/donation" />
          <CustomButton titleKey={t("aidAdha.learnMore")} to="/aid-al-adha" />
        </div>
      </div>
    </div>
  );
};

export default AidAdhaSection;
