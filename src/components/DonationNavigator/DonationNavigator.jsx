import React, { useEffect, useState } from "react";
import "./DonationNavigator.css"; // Import the CSS

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [cause, setCause] = useState("");

  useEffect(() => {
    const savedAmount = localStorage.getItem("donationAmount");
    const savedCause = localStorage.getItem("donationCause");

    if (savedAmount) setAmount(savedAmount);
    if (savedCause) setCause(savedCause);
  }, []);

  const handleCreditCardSubmit = (e) => {
    e.preventDefault();
    alert(`Processing credit card payment of $${amount} for ${cause}`);
  };

  const handlePayPalSubmit = () => {
    alert(`Redirecting to PayPal for $${amount} donation to ${cause}`);
  };

  return (
    <div className="donation-page">
      <h2 className="form-title">Complete Your Donation</h2>

      <form className="donation-form" onSubmit={handleCreditCardSubmit}>
        <label className="form-label">
          Donation Cause:
          <select
            className="form-select"
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            required>
            <option value="">-- Select Cause --</option>
            <option value="sos-gaza">SOS Gaza</option>
            <option value="zakat-al-maal">Zakat Al Maal</option>
            <option value="ramadan-2025">Ramadan 2025</option>
            <option value="rafah-emergency">Rafah Emergency</option>
            <option value="aid-al-adha">Aid Al-Adha</option>
            <option value="orphan-sponsorship">Orphan Sponsorship</option>
            <option value="water-for-gaza">Water for Gaza</option>
            <option value="ramadan-donations">Ramadan Donations</option>
          </select>
        </label>

        <label className="form-label">
          Amount (USD):
          <input
            className="form-input"
            type="number"
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <div className="payment-section">
          <h3 className="payment-title">Choose Payment Method:</h3>

          <button type="submit" className="payment-button credit-card">
            Donate by Credit Card
          </button>

          <button
            type="button"
            className="payment-button paypal"
            onClick={handlePayPalSubmit}>
            Donate by PayPal
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationPage;
