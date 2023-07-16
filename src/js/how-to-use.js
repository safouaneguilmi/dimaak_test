import React from "react";
import { useTranslation } from "react-i18next";
function HowToUse(props) {
  const { t } = useTranslation();
  return (
    <section className="howToUse" data-language={props.language}>
      <div
        className="howToUse__step"
        data-step="1"
        onMouseOver={(e) => props.changeStep(e)}
        onClick={(e) => props.changeStep(e)}
        step={props.step}
      >
        <p className="howToUse__step-num" data-step="1">
          1
        </p>
        <div className="howToUse__step-text" data-step="1">
          <h3 className="howToUse__step-title" data-step="1">
            {t("how_to_use:step_one.title")}
          </h3>
          <p className="howToUse__step-desc" data-step="1">
            {t("how_to_use:step_one.description")}
          </p>
        </div>
      </div>
      <div
        className="howToUse__step"
        data-step="2"
        onMouseOver={(e) => props.changeStep(e)}
        onClick={(e) => props.changeStep(e)}
      >
        <p className="howToUse__step-num" data-step="2">
          2
        </p>
        <div className="howToUse__step-text" data-step="2">
          <h3 className="howToUse__step-title" data-step="2">
            {t("how_to_use:step_two.title")}
          </h3>
          <p className="howToUse__step-desc" data-step="2">
            {t("how_to_use:step_two.description")}
          </p>
        </div>
      </div>
      <div
        className="howToUse__step"
        data-step="3"
        onMouseOver={(e) => props.changeStep(e)}
        onClick={(e) => props.changeStep(e)}
      >
        <p className="howToUse__step-num" data-step="3">
          3
        </p>
        <div className="howToUse__step-text" data-step="3">
          <h3 className="howToUse__step-title" data-step="3">
          {t("how_to_use:step_three.title")}

          </h3>
          <p className="howToUse__step-desc" data-step="3">
          {t("how_to_use:step_three.description")}

          </p>
        </div>
      </div>
      <div
        className="howToUse__step"
        data-step="4"
        onMouseOver={(e) => props.changeStep(e)}
        onClick={(e) => props.changeStep(e)}
      >
        <p className="howToUse__step-num" data-step="4">
          4
        </p>
        <div className="howToUse__step-text" data-step="4">
          <h3 className="howToUse__step-title" data-step="4">
          {t("how_to_use:step_four.title")}

          </h3>
          <p className="howToUse__step-desc" data-step="4">
          {t("how_to_use:step_four.description")}

          </p>
        </div>
      </div>
      <div
        className="howToUse__step"
        data-step="5"
        onMouseOver={(e) => props.changeStep(e)}
        onClick={(e) => props.changeStep(e)}
      >
        <p className="howToUse__step-num" data-step="5">
          5
        </p>
        <div className="howToUse__step-text" data-step="5">
          <h3 className="howToUse__step-title" data-step="5">
          {t("how_to_use:step_five.title")}

          </h3>
          <p className="howToUse__step-desc" data-step="5">
          {t("how_to_use:step_five.description")}
            
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;
