import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import "./QurbaniSection.css";

const donationDeadline = new Date("2025-06-06T23:59:59");
const current = 312;
const goal = 500;

const QurbaniDonateBox = () => {
  const { t } = useTranslation("QurbaniSection");
  const [timeLeft, setTimeLeft] = useState({});
  const [selectedTier, setSelectedTier] = useState(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = donationDeadline - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const percentage = (current / goal) * 100;
    gsap.to(progressRef.current, {
      width: `${percentage}%`,
      duration: 1,
      ease: "power2.out",
    });

    if (current >= goal) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, []);

  const donationTiers = [
    { amount: 50, label: t("donationTier.goat"), emoji: "🐐" },
    { amount: 250, label: t("donationTier.share"), emoji: "🐄" },
    { amount: 1000, label: t("donationTier.full"), emoji: "🐂" },
  ];

  const handleDonate = (amount) => {
    setSelectedTier(amount);
    alert(t("redirecting", { amount }));
    // window.location.href = `https://yourdonationlink.com?amount=${amount}`;
  };

  return (
    <div className="donate-box">
      <h3 className="countdown-timer" aria-live="polite">
        🕒 {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s {t("timeLeft")}
      </h3>

      <div className="progress-bar-container">
        <div className="progress-text">{t("goalText", { goal, current })}</div>
        <div className="progress-bar">
          <div className="progress-fill" ref={progressRef}></div>
        </div>

        {current >= 100 && <p className="milestone">{t("milestone.100")}</p>}
        {current >= 300 && <p className="milestone">{t("milestone.300")}</p>}
      </div>

      <div className="donation-tiers">
        {donationTiers.map((tier) => (
          <button
            key={tier.amount}
            className={`donate-tier-btn ${
              selectedTier === tier.amount ? "selected" : ""
            }`}
            onClick={() => handleDonate(tier.amount)}>
            {tier.emoji} ${tier.amount} – {tier.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QurbaniDonateBox;
