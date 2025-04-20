import React from "react";
import "./ZakatCalculator.css";
import CustomButton from "../NavBar/customButton/customButton";

const ZakatCalculator = () => {
  return (
    <div className="zakat-section">
      <div className="zakat-triangle">
        <img src="/images/HeroSlider/slide2.webp" alt="Child counting coins" />
      </div>
      <div className="zakat-content">
        <h2>Learn How to Calculate Your Zakat al-Maal</h2>
        <p>
          <strong>Find your Zakat al-Maal amount</strong> quickly using our easy
          calculator. Determine your due Zakat on gold, silver, savings, and
          more. Our tool follows the latest <strong>Nisab</strong> standards to
          keep everything in line with Islamic guidelines.
        </p>
        <p>
          After calculating, you can <strong>confidently give</strong> to
          sustainable initiatives supporting the most vulnerable. Your Zakat
          will <strong>reduce poverty</strong>,{" "}
          <strong>boost education access</strong>, and{" "}
          <strong>strengthen healthcare</strong> for those who need it most.
          Together, change is possible.
        </p>
        <CustomButton titleKey="nav.donateNow" to="/donation" />
      </div>
    </div>
  );
};

export default ZakatCalculator;
