import { useTranslation } from "react-i18next";
export default function AboutText() {
  const { t } = useTranslation();
  return (
    <div className="about-text">
      {/* <h3 className="about-text__title">
        Pourquoi <span>Dim3ak</span>?
      </h3> */}
      <p className="about-text__para">
        <span className="bold"> {t("about:about.para_one.title")}</span>{" "}
        <span className="smalcaps">Dim3ak</span>{" "}
        {t("about:about.para_one.text")}
      </p>
      <p className="about-text__para">
        <span className="bold"> {t("about:about.para_two.title")}</span> {t("about:about.para_two.text.one")}{" "}
        <span className="smalcaps">{t("about:about.logo_text")}</span>{t("about:about.para_two.text.two")}
      </p>
      <p className="about-text__para">
        <span className="bold">{t("about:about.para_three.title")}</span> {t("about:about.para_three.text.one")}
        <span className="smalcaps">{t("about:about.logo_text")}</span>, {t("about:about.para_three.text.two")}
      </p>
    </div>
  );
}
