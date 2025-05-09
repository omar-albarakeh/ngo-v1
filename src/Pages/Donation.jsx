import React from "react";
import TopInfoBar from "../components/TopInfo/TopBar";
import MyNavBar from "../components/NavBar/MyNavBar/MyNavBar";
import BacktoTop from "../components/BackToTopButton/BackToTop";
import CharityQuote from "../components/CharityQuote/CharityQuote";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import { useTranslation } from "react-i18next";
import BankInfo from "../components/BankInfo/BankInfo";
import Parallelscreen from "../components/parallelscreen/Donate";
import DonationPage from "../components/DonationNavigator/DonationNavigator";

const Home = () => {
  const { t } = useTranslation("Donation");
  return (
    <>
      <TopInfoBar />
      <MyNavBar />
      <DonationPage />
      <BankInfo />
      <CharityQuote />
      <BacktoTop />
      <Footer />
    </>
  );
};

export default Home;
