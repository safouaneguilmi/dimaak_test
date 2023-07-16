import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./js/header";
import Hero_img from "./js/hero_img";
import Hero_text from "./js/hero_text";
import Services from "./js/services";
import AboutImg from "js/about-img";
import AboutText from "js/about-text";
import HowToUse from "js/how-to-use";
import HowToUseImg from "js/howToUse-img";
import BasicAccordion from "js/accordion";
import Footer from "js/footer";
import Popup from "js/app-popup";
import Contact from "js/contact";
import i18n from "js/i18";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [appBtnClicked, setAppBtnClicked] = React.useState(false);
  const [btnLanguageClicked, setBtnLanguageClicked] = React.useState(false);
  const [language, setLanguage] = React.useState(i18n.language);
  const [step, setStep] = React.useState(1);
  const handleAppBtnClicked = (e) => {
    e.preventDefault();
    setAppBtnClicked((prev) => !prev);
  };
  const handleBtnLanguageClicked = () => {
    setBtnLanguageClicked((prev) => !prev);
  };
  const changeLanguage = (e) => {
    setLanguage(e.target.getAttribute("data-language"));
    setAppBtnClicked(false);
    setBtnLanguageClicked(false);
  };
  const changeStep = (e) => {
    setStep(e.target.getAttribute("data-step"));
  };
  useEffect(() => {
    language === "ar"
      ? (document.body.dir = "rtl")
      : (document.body.dir = "ltr");
  });
  return (
    <BrowserRouter>
      <div className="App" data-language={language}>
        <Header
          changeLanguage={changeLanguage}
          language={language}
          handleBtnLanguageClicked={handleBtnLanguageClicked}
          clicked={btnLanguageClicked}
        />

        <Routes>
          <Route
            path="/dimaak_test"
            element={
              <div className="home">
                <div className="hero" data-language={language}>
                  <Hero_text handleAppBtnClicked={handleAppBtnClicked} />
                  <Hero_img />
                </div>
                <h2 className="about-title">{t("about:about.title")}</h2>
                <AboutImg language={language} />
                <AboutText />
                <Services language={language} />
                <h2 className="howToUse__title" id="how">
                  {t("how_to_use:title")}
                </h2>
                <HowToUse
                  changeStep={changeStep}
                  step={step}
                  language={language}
                />
                <HowToUseImg step={step} />
                <BasicAccordion language={language} />
                <Popup
                  btnClicked={appBtnClicked}
                  handleAppBtnClicked={handleAppBtnClicked}
                />
              </div>
            }
          />

          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
// import Test from "js/test";
// import Test2 from "js/test2";
// import i18n from "js/i18";

// function App() {
//   const [lang, setLang] = React.useState("");
//   return (
//     <>
//       <button onClick={() => (i18n.changeLanguage("fr"))}>Change</button>
//       <Test />
//       <Test2 />
//     </>
//   );
// }

export default App;
