import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TaxTip from "../components/TaxTip/TaxTip";
import YouTube from "../components/Youtube/YouTubeGallery";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import CardSlider from "../components/cardSlider3d/cardSlider3d";
import MenuItem from "../components/MenuItem/MenuItem";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import CharityQuote from "../components/CharityQuote/CharityQuote";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import zakatData from "../components/FAQAccordion/faqData/zakat.json";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import ZakatCalculator from "../components/ZakatCalculator/ZakatCalculator";
import Test123 from "../components/ZakatCalculator/test123";

const ZakatAlmal = () => {
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <h1>zakat-al-maal</h1>
      <ZakatCalculator />
      <FAQAccordion title="Zakat FAQ" faqList={zakatData} />
      <MenuItem />
      <CharityQuote />
      <BacktoTop />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default ZakatAlmal;
