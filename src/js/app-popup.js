import react from "react";
import { useTranslation } from "react-i18next";
function Popup(props) {
  const { t } = useTranslation();
  return (
    <div className={`popup ${props.btnClicked ? "popup--active" : ""}`}>
      <div
        className={`popup__box ${props.btnClicked ? "popup__box--active" : ""}`}
      >
        <a
          href="#populartours"
          className="popup__close"
          onClick={(e) => props.handleAppBtnClicked(e)}
        >
          &#10005;
        </a>
        <h2 className="popup__title">{t("popup:title")}</h2>
        <div className="popup__col-1">
          <a
            href="https://play.google.com/store/apps?hl=fr&gl=US"
            target="_blank"
          >
            {" "}
            <img src={require("../assets/playstore.webp")} alt="" />
          </a>
          <a href="https://www.apple.com/fr/app-store/" target="_blank">
            {" "}
            <img src={require("../assets/app-store.webp")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Popup;
