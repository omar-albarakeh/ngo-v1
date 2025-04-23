import React, { useState, useEffect } from "react";
import "./ZakatCalculator.css";
import CustomButton from "../NavBar/customButton/customButton";

const ZAKAT_PERCENTAGE = 2.5;
const NISAB = 7800;

const ZakatCalculator = () => {
  const [values, setValues] = useState({
    gold: { grams: "", price: 0 },
    silver: { grams: "", price: 0 },
    cash: "",
    business: "",
    investments: "",
    receivables: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/metal-prices")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch prices");
        return res.json();
      })
      .then((data) => {
        setValues((prev) => ({
          ...prev,
          gold: { ...prev.gold, price: data.goldPricePerGram },
          silver: { ...prev.silver, price: data.silverPricePerGram },
        }));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e, category = null, key = null) => {
    const { name, value } = e.target;
    const num = parseFloat(value) || "";
    if (category && key) {
      setValues((prev) => ({
        ...prev,
        [category]: { ...prev[category], [key]: num },
      }));
    } else {
      setValues((prev) => ({ ...prev, [name]: num }));
    }
  };

  const goldValue = (parseFloat(values.gold.grams) || 0) * values.gold.price;
  const silverValue =
    (parseFloat(values.silver.grams) || 0) * values.silver.price;

  const totalZakatable =
    goldValue +
    silverValue +
    (parseFloat(values.cash) || 0) +
    (parseFloat(values.business) || 0) +
    (parseFloat(values.investments) || 0) +
    (parseFloat(values.receivables) || 0);

  const zakatDue =
    totalZakatable >= NISAB ? (totalZakatable * ZAKAT_PERCENTAGE) / 100 : 0;

  if (loading) return <p>Loading live prices...</p>;
  if (error) return <p>Error loading prices: {error}</p>;

  return (
    <div className="zakat-container">
      <h2>Zakat Calculator</h2>

      <section className="price-info">
        <div className="price-item gold-price">
          <strong>Gold Price:</strong> ${values.gold.price.toFixed(2)} / gram
        </div>
        <div className="price-item silver-price">
          <strong>Silver Price:</strong> ${values.silver.price.toFixed(2)} /
          gram
        </div>
      </section>

      <div className="input-section">
        <h3>Precious Metals</h3>
        {["gold", "silver"].map((metal) => {
          const value =
            (parseFloat(values[metal].grams) || 0) * values[metal].price;
          return (
            <div className="metal-group" key={metal}>
              <div className="input-pair">
                <label>
                  {metal.charAt(0).toUpperCase() + metal.slice(1)} (grams)
                </label>
                <input
                  type="number"
                  value={values[metal].grams}
                  onChange={(e) => handleChange(e, metal, "grams")}
                  placeholder="Grams"
                />
              </div>
              <div className="input-pair">
                <label>Price (USD/gram)</label>
                <input type="number" value={values[metal].price} readOnly />
              </div>
              <div className="input-pair">
                <label>Total Value (USD)</label>
                <span className="readonly-box">${value.toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="input-section">
        {[
          { key: "cash", label: "Cash (USD)" },
          { key: "business", label: "Business Assets (USD)" },
          { key: "investments", label: "Investments (USD)" },
          { key: "receivables", label: "Receivables (USD)" },
        ].map(({ key, label }) => (
          <div className="inline-input" key={key}>
            <label htmlFor={key}>{label}</label>
            <input
              type="number"
              id={key}
              name={key}
              value={values[key]}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>
        ))}
      </div>

      <div className="results">
        <p>
          <strong>Total Zakatable Amount:</strong> ${totalZakatable.toFixed(2)}
        </p>
        <p>
          <strong>Nisab Threshold:</strong> ${NISAB}
        </p>
        {zakatDue > 0 ? (
          <p className="zakat-due">Zakat Due: ${zakatDue.toFixed(2)}</p>
        ) : (
          <p className="no-zakat">No Zakat is Due</p>
        )}
      </div>

      <CustomButton titleKey="nav.donateNow" to="/donation" />
    </div>
  );
};

export default ZakatCalculator;
