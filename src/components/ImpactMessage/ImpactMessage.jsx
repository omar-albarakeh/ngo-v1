import React from "react";
import "./ImpactMessage.css";

const ImpactMessage = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="impact-heading">Your Support Matters More Than Ever</h2>
        <p className="impact-text">
          Thousands of lives in Palestine have been lost in the ongoing conflict
          — among them children, medical staff, and journalists. Homes,
          hospitals, schools, and places of worship have been destroyed, leaving
          entire communities in ruins.
        </p>
        <p className="impact-text">
          Every action counts. Whether you choose to donate or simply raise
          awareness, your support can bring critical relief to those in urgent
          need. With Human Appeal, your contribution is direct, far-reaching,
          and makes an immediate difference on the ground in Gaza.
        </p>
        <div className="impact-images">
          <img
            src="/images/textandimage/impact2.jpeg"
            alt="Impact 1"
            className="impact-img"
          />
          <img
            src="/images/textandimage/impact1.jpeg"
            alt="Impact 2"
            className="impact-img"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactMessage;
