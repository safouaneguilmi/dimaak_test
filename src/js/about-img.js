import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const image1 = require("../assets/about-img-1.jpg");
const image2 = require("../assets/about-img-2.jpg");
const image3 = require("../assets/about-img-3.png");

export default function AboutImg(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about-img" data-language={props.language}>
      <div
        className="about-img__box about-img__image--1"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src={image1} alt="" className="about-img__image " />
      </div>
      <div className="about-img__box about-img__image--2" data-aos="zoom-in">
        <img src={image2} alt="" className="about-img__image " />
      </div>
      <div
        className="about-img__box about-img__image--3"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img src={image3} alt="" className="about-img__image " />
      </div>
    </div>
  );
}
