import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ZakatCalculator.css";

const ZAKAT_PERCENTAGE = 2.5;
const NISAB = 7800;

const ZakatCalculator = () => {
  const { t } = useTranslation("mainzakatcalculator");

  const [values, setValues] = useState({
    gold: "",
    silver: "",
    cash: "",
    business: "",
    investments: "",
    receivables: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: parseFloat(value) || "" });
  };

  const totalZakatable =
    (parseFloat(values.gold) || 0) +
    (parseFloat(values.silver) || 0) +
    (parseFloat(values.cash) || 0) +
    (parseFloat(values.business) || 0) +
    (parseFloat(values.investments) || 0) +
    (parseFloat(values.receivables) || 0);

  const zakatDue =
    totalZakatable >= NISAB ? (totalZakatable * ZAKAT_PERCENTAGE) / 100 : 0;

  return (
    <div className="zakat-container">
      <h2>{t("zakatCalculator.title")}</h2>

      <div className="input-group">
        <label htmlFor="gold">{t("zakatCalculator.gold")}</label>
        <input
          type="number"
          name="gold"
          id="gold"
          value={values.gold}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="silver">{t("zakatCalculator.silver")}</label>
        <input
          type="number"
          name="silver"
          id="silver"
          value={values.silver}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="cash">{t("zakatCalculator.cash")}</label>
        <input
          type="number"
          name="cash"
          id="cash"
          value={values.cash}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="business">{t("zakatCalculator.business")}</label>
        <input
          type="number"
          name="business"
          id="business"
          value={values.business}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="investments">{t("zakatCalculator.investments")}</label>
        <input
          type="number"
          name="investments"
          id="investments"
          value={values.investments}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="receivables">{t("zakatCalculator.receivables")}</label>
        <input
          type="number"
          name="receivables"
          id="receivables"
          value={values.receivables}
          onChange={handleChange}
        />
      </div>

      <div className="results">
        <p>
          <strong>{t("zakatCalculator.total")}:</strong> $
          {totalZakatable.toFixed(2)}
        </p>
        <p>
          <strong>{t("zakatCalculator.nisab")}:</strong> ${NISAB}
        </p>
        {zakatDue > 0 ? (
          <p className="zakat-due">
            {t("zakatCalculator.zakatDue")}: ${zakatDue.toFixed(2)}
          </p>
        ) : (
          <p className="no-zakat">{t("zakatCalculator.noZakat")}</p>
        )}
      </div>
    </div>
  );
};

export default ZakatCalculator;
