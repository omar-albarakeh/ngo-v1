import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./BottomBar.css";
import CustomButton from "../NavBar/customButton/customButton";

const BottomBar = () => {
  const { t } = useTranslation("bottomBar");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [footerInView, setFooterInView] = useState(false);

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

  const barClass = `bottom-bar ${footerInView ? "bottom-bar-static" : ""}`;

  const bottomBarContent = (
    <div className={barClass}>
      <span className="bottom-bar-title">{t("bottomBar.title")}</span>

      <input
        type="number"
        placeholder={t("bottomBar.placeholder")}
        className="bottom-bar-input"
      />

      <select className="bottom-bar-select">
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

      <CustomButton titleKey={t("bottomBar.donate")} to="/donation" />
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
