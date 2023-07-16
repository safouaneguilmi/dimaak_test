import React from "react";
import { useTranslation } from "react-i18next";
function Input(props) {
  const { t } = useTranslation();
  const [left, setLeft] = React.useState(false);
  const handleFocus = () => {
    setLeft(true);
  };
  return (
    <div className="contact-form__input">
      <input
        type="email"
        name="email"
        id=""
        placeholder={t("contact:form.email")}
        onChange={(e) => props.onChange(e)}
        required
        className="contact__input-email"
        value={props.formInfo.email}
        onBlur={handleFocus}
        left={left.toString()}
      />
      <span className="error__msg">{t("contact:form.error_msg")}</span>
      <textarea
        name="message"
        id=""
        placeholder={t("contact:form.message")}
        onChange={(e) => props.onChange(e)}
        required
        className="contact__input-message"
        value={props.formInfo.message}
      />
    </div>
  );
}
export default Input;
