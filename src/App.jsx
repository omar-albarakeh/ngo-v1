import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n";
import Home from "./Pages/Home";
import { useTranslation } from "react-i18next";
// import Whoweare from "./Pages/Whoweare";
import Contact from "./Pages/Contact/ContactComponent";
// import History from "./Pages/History";
// import Gallery from "./Pages/Gallery";
// import SOSGaza from "./Pages/SOSGaza";
// import ZakatAlmal from "./Pages/ZakatAlmal";
// import Ramadan2025 from "./Pages/ramadan2025";
// import Rafahemergency from "./Pages/Rafahemergency";
// import Aidaladha from "./Pages/Aidaladha";
// import Orphansponsorship from "./Pages/Orphansponsorship";
// import Waterforgaza from "./Pages/Waterforgaza";
// import Ramadandonations from "./Pages/Ramadandonations";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        {/*<Route path="/WhoWeAre" element={<Whoweare />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sos-gaza" element={<SOSGaza />} />
        <Route path="/zakat-al-maal" element={<ZakatAlmal />} />
        <Route path="/ramadan-2025" element={<Ramadan2025 />} />
        <Route path="/rafah-emergency" element={<Rafahemergency />} />
        <Route path="/aid-al-adha" element={<Aidaladha />} />
        <Route path="/orphan-sponsorship" element={<Orphansponsorship />} />
        <Route path="/water-for-gaza" element={<Waterforgaza />} />
        <Route path="/ramadan-donations" element={<Ramadandonations />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
