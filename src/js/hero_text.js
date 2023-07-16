import { useTranslation } from "react-i18next";
export default function Hero_text(props) {
  const { t } = useTranslation();

  return (
    <div className="hero-text">
      <h1 className="hero__title">{t("hero:hero.title")}</h1>
      <h4 className="hero__text">{t("hero:hero.text")}</h4>
      <a
        href="#"
        className="hero__btn"
        onClick={(e) => props.handleAppBtnClicked(e)}
      >
        {t("hero:hero.button")}
      </a>
    </div>
  );
}
