import React, { useState } from "react";
import "./ZakatCalculator.css";

const ZAKAT_PERCENTAGE = 2.5;
const NISAB = 7800; // USD (based on 85g of gold approx)

const ZakatCalculator = () => {
  const [values, setValues] = useState({
    gold: "",
    silver: "",
    cash: "",
    business: "",
    investments: "",
    receivables: "",
  });

  const [showInfo, setShowInfo] = useState(false);

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
      <h2>Zakat al-Mal Calculator</h2>

      <div className="input-group">
        <label>Gold (USD)</label>
        <input
          type="number"
          name="gold"
          value={values.gold}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Silver (USD)</label>
        <input
          type="number"
          name="silver"
          value={values.silver}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Cash (in hand & bank)</label>
        <input
          type="number"
          name="cash"
          value={values.cash}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Business Inventory</label>
        <input
          type="number"
          name="business"
          value={values.business}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Investments (Stocks, Crypto, etc.)</label>
        <input
          type="number"
          name="investments"
          value={values.investments}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Money Owed to You</label>
        <input
          type="number"
          name="receivables"
          value={values.receivables}
          onChange={handleChange}
        />
      </div>

      <div className="results">
        <p>
          <strong>Total Zakatable Wealth:</strong> ${totalZakatable.toFixed(2)}
        </p>
        <p>
          <strong>Nisab Threshold:</strong> $7,800
        </p>
        {zakatDue > 0 ? (
          <p className="zakat-due">Zakat Due (2.5%): ${zakatDue.toFixed(2)}</p>
        ) : (
          <p className="no-zakat">
            No Zakat required. Total is below the Nisab.
          </p>
        )}
      </div>

      <button className="info-toggle" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Info" : "What is Zakat al-Mal?"}
      </button>

      {showInfo && (
        <div className="info-box">
          <h3>About Zakat al-Mal</h3>
          <p>
            Zakat al-Mal is a form of charity required from every Muslim who
            possesses wealth above the Nisab for one full lunar year.
          </p>
          <ul>
            <li>
              Rate: <strong>2.5%</strong>
            </li>
            <li>
              Nisab (based on gold): <strong>$7,800</strong>
            </li>
            <li>
              Assets that require Zakat:
              <ul>
                <li>Gold, Silver</li>
                <li>Cash & bank balance</li>
                <li>Business goods</li>
                <li>Investments (stocks, crypto)</li>
                <li>Receivables (money owed to you)</li>
              </ul>
            </li>
            <li>
              No Zakat on:
              <ul>
                <li>Personal home</li>
                <li>Car & furniture</li>
                <li>Clothing</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ZakatCalculator;
