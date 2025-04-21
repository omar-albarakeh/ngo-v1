import React from "react";
import "./Donate.css";
import CustomButton from "../NavBar/customButton/customButton";

const Donate = ({
  backgroundImage,
  heading,
  text,
  buttonTitle,
  buttonLink = "/donation",
}) => {
  return (
    <div
      className="donate-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="donate-content white-box">
        <h1 className="donate-heading">{heading}</h1>
        <p className="donate-text">{text}</p>
        {buttonTitle && <CustomButton title={buttonTitle} to={buttonLink} />}
      </div>
    </div>
  );
};

export default Donate;
