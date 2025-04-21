import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./BottomBar.css";
import CustomButton from "../NavBar/customButton/customButton";

const BottomBar = () => {
  const { t } = useTranslation("bottomBar");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [footerInView, setFooterInView] = useState(false);

  const [amount, setAmount] = useState("");
  const [cause, setCause] = useState("sos-gaza");

  const navigate = useNavigate();
  const footerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const trigger = document.getElementById("footer-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  const handleDonateClick = () => {
    localStorage.setItem("donationAmount", amount);
    localStorage.setItem("donationCause", cause);
    navigate("/donation");
  };

  const barClass = `bottom-bar ${footerInView ? "bottom-bar-static" : ""}`;

  const bottomBarContent = (
    <div className={barClass}>
      <span className="bottom-bar-title">{t("bottomBar.title")}</span>

      <input
        type="number"
        placeholder={t("bottomBar.placeholder")}
        className="bottom-bar-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="bottom-bar-select"
        value={cause}
        onChange={(e) => setCause(e.target.value)}>
        <option value="sos-gaza">{t("bottomBar.causes.sosGaza")}</option>
        <option value="zakat-al-maal">
          {t("bottomBar.causes.zakatAlMaal")}
        </option>
        <option value="ramadan-2025">
          {t("bottomBar.causes.ramadan2025")}
        </option>
        <option value="rafah-emergency">
          {t("bottomBar.causes.rafahEmergency")}
        </option>
        <option value="aid-al-adha">{t("bottomBar.causes.aidAlAdha")}</option>
        <option value="orphan-sponsorship">
          {t("bottomBar.causes.orphanSponsorship")}
        </option>
        <option value="water-for-gaza">
          {t("bottomBar.causes.waterForGaza")}
        </option>
        <option value="ramadan-donations">
          {t("bottomBar.causes.ramadanDonations")}
        </option>
      </select>

      <CustomButton titleKey="nav.donateNow" to="/donation" />
    </div>
  );

  return (
    <>
      {isMobile && !footerInView && (
        <div className="bottom-bar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? t("bottomBar.close") : t("bottomBar.donate")}
        </div>
      )}

      {isOpen &&
        (footerInView ? (
          <div className="bottom-bar-wrapper">{bottomBarContent}</div>
        ) : (
          bottomBarContent
        ))}
    </>
  );
};

export default BottomBar;
