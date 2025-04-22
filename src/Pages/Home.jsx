import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TaxTip from "../components/TaxTip/TaxTip";
import YouTube from "../components/Youtube/YouTubeGallery";
import ZakatCard from "../components/ZakatCard/ZakatCalculator";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import CardSlider from "../components/cardSlider3d/cardSlider3d";
import DonationBenefits from "../components/DonationBenefits/DonationBenefits";
import MenuItem from "../components/MenuItem/MenuItem";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import BankInfo from "../components/BankInfo/BankInfo";
import CharityQuote from "../components/CharityQuote/CharityQuote";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import QurbaniSection from "../components/QurbaniSection/QurbaniSection";
import AidAdhaSection from "../components/AidAdhaSection/AidAdhaSection";
import AdPopup from "../components/AdPopup/AdPopup";

const Home = () => {
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <HeroSlider />
      <AdPopup
        message="Check out our new donation campaign!"
        link="/aid-al-adha"
        useRouter={true} 
        delay={2000}
      />
      <TaxTip />
      <QurbaniSection />
      <YouTube />
      <AidAdhaSection />
      <ZakatCard />
      <FeatureSection />
      <CardSlider />
      <DonationBenefits />
      <BacktoTop />
      <MenuItem />
      <CharityQuote />
      <div id="footer-trigger" style={{ height: "0.01px" }}></div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Home;
