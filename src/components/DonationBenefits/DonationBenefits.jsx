import React from "react";
import { useTranslation } from "react-i18next";
import "./DonationBenefits.css"; // Import the CSS file
import CustomButton from "../NavBar/customButton/customButton";

const DonationBenefits = () => {
  const { t } = useTranslation("donationBenefits");

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

      <CustomButton titleKey="nav.donateNow" to="/donation" />
    </section>
  );
};

export default DonationBenefits;
