import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./BankInfo.css";

const BankInfo = () => {
  const { t } = useTranslation("bankInfo");
  const [copied, setCopied] = useState("");

  // Your actual data
  const iban = "FR76 3000 3024 3300 0506 1175 910";
  const bic = "SOGEFRPP";

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
    <div className="bank-info-wrapper">
      <h2 className="bank-title">{t("bankInfo.title")}</h2>
      <div className="bank-info-line">
        <InfoItem label="Iban" value={iban} />
        <InfoItem label="Bic" value={bic} />
      </div>
    </div>
  );
};

export default BankInfo;
