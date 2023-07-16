import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Services(props) {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="services" data-language={props.language}>
      <div className="service-card" data-aos="fade-down">
        <i className="fa-solid fa-shield-halved"></i>
        <h3 className="service-card__title">
          {t("services:cards.card_one.title")}
        </h3>
        <p className="service-card__text">
          {t("services:cards.card_one.text")}
        </p>
      </div>
      <div className="service-card" data-aos="fade-down" data-aos-delay="200">
        <i className="fa-solid fa-dollar-sign"></i>
        <h3 className="service-card__title">
          {t("services:cards.card_two.title")}
        </h3>
        <p className="service-card__text">
          {t("services:cards.card_two.text")}
        </p>
      </div>
      <div className="service-card " data-aos="fade-down" data-aos-delay="300">
        <i className="fa-solid fa-map-location-dot"></i>
        <h3 className="service-card__title">
          {t("services:cards.card_three.title")}
        </h3>
        <p className="service-card__text">
          {t("services:cards.card_three.text")}
        </p>
      </div>
      <div className="service-card" data-aos="fade-down" data-aos-delay="400">
        <i className="fa-solid fa-repeat"></i>
        <h3 className="service-card__title">
          {t("services:cards.card_four.title")}
        </h3>
        <p className="service-card__text">
          {t("services:cards.card_four.text")}
        </p>
      </div>
    </div>
  );
}
