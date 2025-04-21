import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import MenuItem from "../components/MenuItem/MenuItem";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import CharityQuote from "../components/CharityQuote/CharityQuote";
import Parallelscreen from "../components/parallelscreen/Donate";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import BackToTop from "../components/BackToTopButton/BackToTop";
import { useTranslation } from "react-i18next";
import OurApprouch from "../components/OurApproach/OurApproach";
import CommitmentSection from "../components/CommitmentSection/CommitmentSection";
import LifeVerseCard from "../components/LifeVerseCard/LifeVerseCard";

const Whoweare = () => {
  const { t } = useTranslation("whoweare");
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <Parallelscreen
        backgroundImage="/images/parallelscreen/Parallel1.jpg"
        heading={t("donate.heading")}
        text={t("donate.text")}
        buttonTitle={t("donate.button")}
        buttonLink="/donation"
      />
      <LifeVerseCard />
      <WhoWeAre />
      <OurApprouch />
      {/* /   <CommitmentSection /> */}
      <BottomBar />
      <BackToTop />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <Footer />
    </>
  );
};

export default Whoweare;
