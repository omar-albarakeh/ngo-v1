import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./customButton.css";

const CustomButton = ({ titleKey, title, to = "/donation" }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("buttons");

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {title || t(titleKey || "nav.DonateNow")}
    </button>
  );
};

export default CustomButton;
