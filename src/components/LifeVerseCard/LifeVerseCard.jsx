import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./LifeVerseCard.css";

const LifeVerseCard = () => {
  const { t } = useTranslation("whoweare");

  return (
    <motion.div
      className="verse-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="verse-card">
        <p className="verse-text">{t("verse.text")}</p>
        <p className="verse-source">{t("verse.source")}</p>
      </div>
    </motion.div>
  );
};

export default LifeVerseCard;
