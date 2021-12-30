import { Typography } from "@mui/material";
import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <Typography component="h4" variant="h3" className="slide-title">
            {slide.title}
          </Typography>
          <Typography component="h4" variant="h6" className="slide-text">
            {slide.description}
          </Typography>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
