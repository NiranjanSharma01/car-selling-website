// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Car = (props) => {
  var settings = {
    dots: true,
      autoplay: true,
      arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
    infinite: true,

          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      
    ]
  };
  const navigate = useNavigate();

  const navigateToSingleCar = (c) => {
    navigate("/Newsingle",{state:{id:c._id}});

  
  };
  return (
    <>
            <Slider {...settings}>

      {props.data.map((c) => (
        <div className="">
          <div className="impl_fea_car_box">
            <div className="impl_fea_car_img">
              <img
                src={c.image1}
                alt=""
                className="img-fluid impl_frst_car_img"
              />
              <img
                src={c.image2}
                alt=""
                className="img-fluid impl_hover_car_img"
              />
              <span className="impl_img_tag" title="compare">
                <a href="/compare">
                  <i className={c.icon} aria-hidden="true"></i>
                </a>
              </span>
            </div>
            <div className="impl_fea_car_data ">
              <h2>
                <a href="/Newsingle">{c.name}</a>
              </h2>
              <ul className="ul01" >
                <li >
                  <span className="impl_fea_title">Model </span>
                  <span className="impl_fea_name">
                    {c.company} {c.model}
                  </span>
                </li>
                <li>
                  <span className="impl_fea_title">Year</span>
                  <span className="impl_fea_name">{c.year}</span>
                </li>
                <li>
                  <span className="impl_fea_title">Color</span>
                  <span className="impl_fea_name">{c.color}</span>
                </li>
                <li>
                  <span className="impl_fea_title">KM</span>
                  <span className="impl_fea_name">{c.km}</span>
                </li>
                <li>
                  <span className="impl_fea_title">Price</span>
                  <span className="impl_fea_name">{c.price}</span>
                </li>
              </ul>
              <div className="impl_fea_btn">
                <button
                  className="impl_btn"
                  onClick={() => navigateToSingleCar(c)}
                >
                  <span className="impl_doller">Buy Now </span>
                  <span className="impl_bnw">View Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      ))}
    </Slider>

    </>
  );
};

export default Car;
