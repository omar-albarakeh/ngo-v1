import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TaxTip from "../components/TaxTip/TaxTip";
import YouTube from "../components/Youtube/YouTubeGallery";
import ZakatCard from "../components/ZakatCard/ZakatCalculator";
// import FeatureSection from "../components/FeatureSection/FeatureSection";
// import CardSlider from "../components/cardSlider3d/cardSlider3d";
// import MenuItem from "../components/MenuItem/MenuItem";
// import BacktoTop from "../components/BackToTopButton/BackToTop";
// import CharityQuote from "../components/CharityQuote/CharityQuote";
// import Footer from "../components/Footer/Footer";
// import BottomBar from "../components/BottomBar/BottomBar";

const Home = () => {
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <HeroSlider />
      <TaxTip />
      <ZakatCard />
      <YouTube />
      {/*<FeatureSection />
      <CardSlider />
      <MenuItem />
      <CharityQuote />
      <BacktoTop />
      <BottomBar />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <Footer /> */}
    </>
  );
};

export default Home;
