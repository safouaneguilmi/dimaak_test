import React from "react";

function HowToUseImg(props) {
  return (
    <section className="howToUse__img">
      <img src={require(`../assets/step--${props.step}.png`)} alt="" />
    </section>
  )
}

export default HowToUseImg;
