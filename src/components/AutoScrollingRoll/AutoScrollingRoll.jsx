import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./CameraRoll.css";

const images = [
  "/images/AutoScrollingRoll/RafahEmergency1.jpg",
  "/images/AutoScrollingRoll/RafahEmergency2.jpg",
  "/images/AutoScrollingRoll/RafahEmergency3.jpg",
  "/images/AutoScrollingRoll/RafahEmergency4.jpg",
  "/images/AutoScrollingRoll/RafahEmergency5.jpg",
  "/images/AutoScrollingRoll/RafahEmergency6.jpg",
  "/images/AutoScrollingRoll/RafahEmergency7.jpg",
  "/images/AutoScrollingRoll/RafahEmergency8.jpg",
  "/images/AutoScrollingRoll/RafahEmergency9.jpg",
  "/images/AutoScrollingRoll/RafahEmergency10.jpg",
  "/images/AutoScrollingRoll/RafahEmergency11.jpg",
  "/images/AutoScrollingRoll/RafahEmergency12.jpg",
  "/images/AutoScrollingRoll/RafahEmergency13.jpg",
  "/images/AutoScrollingRoll/RafahEmergency14.jpg",
  "/images/AutoScrollingRoll/RafahEmergency15.jpg",
  "/images/AutoScrollingRoll/RafahEmergency16.jpg",
  "/images/AutoScrollingRoll/RafahEmergency17.jpg",
  "/images/AutoScrollingRoll/RafahEmergency18.jpg",
  "/images/AutoScrollingRoll/RafahEmergency19.jpg",
  "/images/AutoScrollingRoll/RafahEmergency20.jpg",
  "/images/AutoScrollingRoll/RafahEmergency21.jpg",
  "/images/AutoScrollingRoll/RafahEmergency22.jpg",
  "/images/AutoScrollingRoll/RafahEmergency23.jpg",
  "/images/AutoScrollingRoll/RafahEmergency24.jpg",
  "/images/AutoScrollingRoll/RafahEmergency25.jpg",
  "/images/AutoScrollingRoll/RafahEmergency26.jpg",
  "/images/AutoScrollingRoll/RafahEmergency27.jpg",
  "/images/AutoScrollingRoll/RafahEmergency28.jpg",
  "/images/AutoScrollingRoll/RafahEmergency29.jpg",
  "/images/AutoScrollingRoll/RafahEmergency30.jpg",
  "/images/AutoScrollingRoll/RafahEmergency31.jpg",
  "/images/AutoScrollingRoll/RafahEmergency32.jpg",
  "/images/AutoScrollingRoll/RafahEmergency33.jpg",
  "/images/AutoScrollingRoll/RafahEmergency34.jpg",
  "/images/AutoScrollingRoll/RafahEmergency35.jpg",
  "/images/AutoScrollingRoll/RafahEmergency36.jpg",
  "/images/AutoScrollingRoll/RafahEmergency37.jpg",
  "/images/AutoScrollingRoll/RafahEmergency38.jpg",
  "/images/AutoScrollingRoll/RafahEmergency39.jpg",
  "/images/AutoScrollingRoll/RafahEmergency40.jpg",
  "/images/AutoScrollingRoll/RafahEmergency41.jpg",
  "/images/AutoScrollingRoll/RafahEmergency42.jpg",
  "/images/AutoScrollingRoll/RafahEmergency43.jpg",
  "/images/AutoScrollingRoll/RafahEmergency44.jpg",
];

const AutoScrollingRoll = () => {
  const stripRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current;
    const totalWidth = strip.scrollWidth / 2; // Because we duplicated the images

    // Create GSAP timeline
    tlRef.current = gsap.to(strip, {
      x: `-=${totalWidth}`,
      duration: 300,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const pauseAnimation = () => {
    tlRef.current?.pause();
  };

  const resumeAnimation = () => {
    tlRef.current?.play();
  };

  return (
    <div
      className="camera-roll-container"
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}>
      <div className="image-strip" ref={stripRef}>
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="roll-image"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingRoll;
