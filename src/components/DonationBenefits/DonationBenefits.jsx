import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./DonationBenefits.css";
import CustomButton from "../NavBar/customButton/customButton";

const DonationBenefits = () => {
  const { t } = useTranslation(["donationBenefits", "bankInfo"]);
  const [copied, setCopied] = useState("");

  const ibanFrance = "FR76 3000 3024 3300 0506 1175 910";
  const ibanSwitzerland = "CH20 0070 0114 9025 3157 1";

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const InfoItem = ({ label, value }) => (
    <div className="info-inline-item">
      <strong>{label}:</strong>
      <span className="info-value">{value}</span>
      <button
        onClick={() => handleCopy(value, label)}
        className="copy-button"
        title={t(`bankInfo.copy${label}`)}>
        {copied === label ? (
          <FontAwesomeIcon icon={faCheckCircle} className="copied-icon" />
        ) : (
          <FontAwesomeIcon icon={faCopy} />
        )}
      </button>
    </div>
  );

  return (
    <section className="donation-benefits">
      <h2 className="donation-title">
        {t("donationBenefits.donationBenefitsTitle")}
      </h2>

      <ul className="benefits-list">
        <li>{t("donationBenefits.transparency")}</li>
        <li>{t("donationBenefits.impact")}</li>
        <li>{t("donationBenefits.reward")}</li>
      </ul>

      <div className="bank-info-box">
        <h3 className="bank-info-title">{t("bankInfo.title")}</h3>
        <div className="bank-info-line">
          <InfoItem label="IBAN_FR" value={ibanFrance} />
          <InfoItem label="IBAN_CH" value={ibanSwitzerland} />
        </div>
      </div>

      <CustomButton titleKey="nav.donateNow" to="/donation" />
    </section>
  );
};

export default DonationBenefits;
