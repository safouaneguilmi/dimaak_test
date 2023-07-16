import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import Input from "./input";
import { useTranslation } from "react-i18next";
function Contact(props) {
  const { t } = useTranslation();
  const [formInfo, setFormInfo] = React.useState({
    email: "",
    message: "",
  });
  const onChange = (e) => {
    setFormInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };
  return (
    <div className="contact" data-language={props.language}>
      <div className="contact__box">
        <div className="contact__info-box">
          <h2 className="contact__title">{t("contact:title")}</h2>
          <p className="contact__text">{t("contact:text")}</p>
          <ul className="contact__info">
            <li className="contact__item">
              <span className="contact__icon">
                <PhoneIcon fontSize="inherit" />
              </span>{" "}
              +212673905674
            </li>
            <li className="contact__item">
              <span className="contact__icon">
                <FaxIcon />
              </span>{" "}
              0518473678
            </li>
            <li className="contact__item">
              <span className="contact__icon">
                <EmailIcon />
              </span>{" "}
              email@example.com
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <Input onChange={onChange} formInfo={formInfo} />
          <button className="contact__btn">{t("contact:form.button")}</button>
        </form>
        <div className="contact__map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3307.45146221321!2d-6.8522288847861725!3d34.00662078061851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDAwJzIzLjgiTiA2wrA1MScwMC4xIlc!5e0!3m2!1sfr!2sma!4v1689191917542!5m2!1sfr!2sma"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;
