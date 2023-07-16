import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="u-center-text">
        <img
          src={require("../assets/logo.png")}
          alt="logo"
          className="footer__logo"
        />
      </div>
      <div className="footer__row">
        <nav className="footer__col ">
          <ul className="footer__nav">
            <li className="footer__nav-elements">
              <Link to="/contact" className="footer__nav-content">
                {t("footer:nav.contact")}
              </Link>
            </li>
            <li className="footer__nav-elements">
              <a href="#" className="footer__nav-content">
                {t("footer:nav.carrers")}
              </a>
            </li>
            <li className="footer__nav-elements">
              <a href="#" className="footer__nav-content">
                {t("footer:nav.privacy")}
              </a>
            </li>
            <li className="footer__nav-elements">
              <a href="#" className="footer__nav-content">
                {t("footer:nav.terms")}
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__col footer__app-container">
          <p className="footer__app-text"> {t("footer:app")}</p>
          <ul className="footer__app-list">
            <li className="footer__app-item">
              <a
                href="https://play.google.com/store/apps?hl=fr&gl=US"
                className="footer__app-link"
                target="_blank"
              >
                <img
                  src={require("../assets/playstore.webp")}
                  alt="google play store"
                />
              </a>
            </li>
            <li className="footer__app-item">
              <a
                href="https://www.apple.com/fr/app-store/"
                className="footer__app-link"
                target="_blank"
              >
                <img
                  src={require("../assets/app-store.webp")}
                  alt="Apple Store"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
