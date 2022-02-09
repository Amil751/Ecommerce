import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/bg/bg-image-9.jpg";
import image2 from "../../assets/images/bg/bg-image-6.jpg";
import classes from './Slider.module.css';
import './Slider.css'
export const SimpleSliderconst = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
  };
  return (
    <div className={classes.slider}>
        <h2 className={classes.text}> Single Item</h2>
      <div style={{ width: "80%" }} className={classes.slider2} >
        
        <Slider {...settings} className="text" >
          <div>
            <img src={image1} alt="slide1" />
          </div>
          <div>
            <img src={image2} alt="slide2" height="300" width="100%"/>
          </div>
        </Slider>
      </div>
    </div>
  );
};
