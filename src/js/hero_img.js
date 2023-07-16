const image = require("../assets/delivery2.png");

export default function Hero_img() {
  return (
    <div className="hero-img">
      <div className="hero__img-container">
        <img src={image} alt="" className="hero__img" />
      </div>
    </div>
  );
}
