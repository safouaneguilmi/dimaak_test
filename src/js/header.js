import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Header(props) {
  const image = require("../assets/logo.png");
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header__logo-container" data-language={props.language}>
        <Link to="/">
          <img src={image} alt="logo" className="header__logo" />
        </Link>
        <h4 className="header__logo-text">Dim3ak</h4>
      </div>
      <nav className="header__nav">
        <ul className="header__list" data-language={props.language}>
          {/* <li className="header__item">
            <a href="#aprops" className="header__link">
              À propos
            </a>
          </li> */}
          <li className="header__item">
            <Link to="/contact" className="header__link">
              {t("header:header.contact")}
            </Link>
          </li>
          <button
            className={`header__language ${
              props.clicked ? "header__language__language--clicked" : ""
            }`}
            onClick={props.handleBtnLanguageClicked}
            onMouseEnter={props.handleBtnLanguageClicked}
            onMouseLeave={props.handleBtnLanguageClicked}
          >
            <i className="fa-solid fa-globe"></i>
            {/* <p className="header__language-text">{props.language}</p> */}
            <ul
              className={
                props.clicked
                  ? "header__language-list header__language-list--show"
                  : "header__language-list header__language-list--hide"
              }
            >
              <li
                className={`header__language-item ${
                  props.language === "fr" ? "header__language-item--active" : ""
                }`}
                data-language="fr"
                onClick={(e) => {
                  props.changeLanguage(e);
                  i18n.changeLanguage("fr");
                }}
              >
                <span class="fi fi-fr" data-language="fr"></span>Fr
              </li>
              <li
                className={`header__language-item ${
                  props.language === "ar" ? "header__language-item--active" : ""
                }`}
                data-language="ar"
                onClick={(e) => {
                  props.changeLanguage(e);
                  i18n.changeLanguage("ar");
                }}
              >
                <span class="fi fi-ma" data-language="ar"></span>Ar
              </li>
              <li
                className={`header__language-item ${
                  props.language === "en" ? "header__language-item--active" : ""
                }`}
                data-language="en"
                onClick={(e) => {
                  props.changeLanguage(e);
                  i18n.changeLanguage("en");
                }}
              >
                <span class="fi fi-gb" data-language="en"></span>En
              </li>
            </ul>
          </button>
          {/* <li className="header__item">
            <a href="#" className="header__link">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
