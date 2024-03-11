import React, { useRef } from "react";
import "./Education.css";
import EducationCard from "./EucationCard/EducationCard";
import { EDUCATION } from "../../utils/data";
import Slider from "react-slick";

const Education = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  // Set slidesToShow to 1 if there is only one item
  if (EDUCATION.length === 1) {
    settings.slidesToShow = 1;
  }

  return (
    <section id="education" className="edu-container">
      <h5>Education & Apprenticeship🎓</h5>

      <div className="edu-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EDUCATION.map((item) => (
            <EducationCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Education;
