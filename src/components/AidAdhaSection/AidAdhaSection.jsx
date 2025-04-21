import React from "react";
import { useTranslation } from "react-i18next";
import "./AidAdhaSection.css";
import CustomButton from "../NavBar/customButton/customButton";

const AidAdhaSection = () => {
  const { t } = useTranslation("adha");

  return (
    <div className="aid-section">
      <div className="aid-content">
        <h2>{t("aidAdha.heading")}</h2>
        <p>
          <strong>{t("aidAdha.paragraph1.bold")}</strong>{" "}
          {t("aidAdha.paragraph1.normal")}
        </p>
        <p>{t("aidAdha.paragraph2")}</p>

        <CustomButton titleKey="nav.donateNow" to="/aid-al-adha" />
      </div>
      <div className="aid-triangle">
        <img
          src="/images/FeatureSectionB/udhiyah.jpg"
          alt="Qurbani distribution"
        />
      </div>
    </div>
  );
};

export default AidAdhaSection;
