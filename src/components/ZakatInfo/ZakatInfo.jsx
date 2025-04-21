import React from "react";
import { motion } from "framer-motion";
import "./ZakatInfo.css";

// Example images for the slider
const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide1.png",
  "/images/slide2.png",
];

export default function ZakatInfo() {
  return (
    <div className="zakat-container">
      <motion.h1
        className="zakat-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        Zakat al-Maal: A Pillar of Compassion
      </motion.h1>

      <motion.section
        className="zakat-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h2>What is Zakat al-Maal?</h2>
        <p>
          Zakat al-Maal is more than a duty—it's a powerful act of giving. This
          annual charity, fixed at <strong>2.5%</strong> of one's accumulated
          wealth, is Islam’s divine tool to <strong>fight poverty</strong> and{" "}
          <strong>foster equality</strong>.
        </p>
      </motion.section>

      <motion.section
        className="zakat-highlight"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}>
        <h3>📍 2023 Impact in Gaza</h3>
        <p>
          Thanks to your Zakat,{" "}
          <strong>humanitarian projects flourished in Gaza</strong>. From food
          distributions to hygiene kits, social support to emergency shelters,
          each donation played a vital role in bringing hope to the most
          vulnerable.
        </p>
      </motion.section>

      {/* Image Slider */}
      <motion.section
        className="image-slider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <h3 className="slider-title">See the Impact of Your Zakat</h3>
        <InfiniteImageSlider images={images} />
      </motion.section>

      <motion.section
        className="zakat-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}>
        <h2>A Right, Not a Favor</h2>
        <p>
          In Islam, Zakat isn't just charity—it's the{" "}
          <strong>right of the poor</strong>. Your contribution uplifts{" "}
          <em>isolated women, orphaned children, and families in distress</em>.
        </p>
      </motion.section>

      <motion.section
        className="zakat-quote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <blockquote>
          “Your Zakat al-Maal is not just a donation. It's a lifeline.”
        </blockquote>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="zakat-section final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}>
        <h2>You Make the Difference</h2>
        <p>
          Your trust empowers action. Your Zakat transforms lives. And yes, you
          also receive a <strong>tax receipt</strong>.
        </p>
        <button className="zakat-donate-btn">Donate Your Zakat Now</button>
      </motion.section>
    </div>
  );
}

// Infinite Image Slider Component
function InfiniteImageSlider({ images }) {
  return (
    <div className="slider-wrapper">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Impact ${index}`}
            className="slider-image"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`clone-${index}`}
            src={image}
            alt={`Impact ${index}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
}
