import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { API } from "../Hooks/backend";
import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car_part1,
  car_part2,
  car_part3,
  main_car,
  main_car1,
  main_car2,
} from "../images/index";

const Newsingle = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,

          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const location = useLocation();

  const buycar = [
    {
      image: car1,
    },
    {
      image: car2,
    },
    {
      image: car3,
    },
    {
      image: car4,
    },
    {
      image: car5,
    },
    {
      image: car6,
    },
  ];
  const carColor = [
    {
      span: "car_color car_clr1",
    },
    {
      span: "car_color car_clr2",
    },
    {
      span: "car_color car_clr3",
    },
    {
      span: "car_color car_clr4",
    },
    {
      span: "car_color car_clr5",
    },
    {
      span: "car_color car_clr6",
    },
  ];
  const carSpecs = [
    {
      heading: "Acceleration",
      progressBar: "progress-bar",
      percentage: "70%",
    },
    {
      heading: "weight",
      progressBar: "progress-bar",
      percentage: "30%",
    },
    {
      heading: "control",
      progressBar: "progress-bar",
      percentage: "80%",
    },
  ];
  const carSpec = [
    {
      heading: "off-road",
      progressBar: "progress-bar",
      percentage: "60%",
    },
    {
      heading: "top speed",
      progressBar: "progress-bar",
      percentage: "40%",
    },
    {
      heading: "toughness",
      progressBar: "progress-bar",
      percentage: "50%",
    },
  ];
  const reviewSlider = [
    {
      heading:
        "Reviewing After 10,000 kms And Six Months Of Driving Dawn, Curiosity",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Jasmine Keith",
    },
    {
      heading: "Best Deal , Value For Money Review After 7000 kms",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Christopher Brown",
    },
    {
      heading:
        "Not Meeting Expectation Regarding The Features Listed By Dawn, Curiosity",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Jake Nolan",
    },
    {
      heading:
        "Reviewing After 10,000 kms And Six Months Of Driving Dawn, Curiosity",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Jasmine Keith",
    },
    {
      heading: "Best Deal , Value For Money Review After 7000 kms",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Christopher Brown",
    },
    {
      heading:
        "Not Meeting Expectation Regarding The Features Listed By Dawn, Curiosity",
      clock: "fa fa-clock-o",
      date: "15 September 2017",
      para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas- ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil.",
      h4: "By : Jake Nolan",
    },
  ];
  const reviewRating = [
    {
      icon: "fa fa-star",
      aria: "true",
    },
    {
      icon: "fa fa-star",
      aria: "true",
    },
    {
      icon: "fa fa-star",
      aria: "true",
    },
    {
      icon: "fa fa-star",
      aria: "true",
    },
    {
      icon: "fa fa-star",
      aria: "true",
    },
  ];
  const description = [
    {
      h1: "Car Brand",
      p1: "Expedition ,",
      p2: "Centaur",
    },
    {
      h1: "FUEL ECONOMY",
      p1: "EPA combined/city/highway : ",
      p2: "15-16/13/20-21 mpg",
    },
    {
      h1: "ENGINE TYPE",
      p1: "DOHC 32-valve V-8, aluminum",
      p2: "block and heads, port fuel injection",
    },
    {
      h1: "TRANSMISSION",
      p1: "6-speed Automatic With Manual",
      p2: "Shifting Mode",
    },
    {
      h1: "Displacement",
      p1: "Torque: 384 lb-ft @ 4750 rpm",
      p2: "Power: 454 hp @ 7000 rpm",
    },
    {
      h1: "VEHICLE TYPE",
      p1: "Front-Engine, Rear-Wheel-Drive,",
      p2: "4-Passenger, 2-Door Coupe or Convertible",
    },
    {
      h1: "PERFORMANCE",
      p1: "Front-Engine, Rear-Wheel-Drive,",
      p2: "4-Passenger, 2-Door Coupe or Convertible",
    },
    {
      h1: "DIMENSIONS",
      p1: "Wheelbase: 115.8 in, Length: 193.3-193.7 in",
      p2: "Width: 75.4 in Height: 54.3 in, Curb weight : 4400-4600 lb",
    },
  ];
  // console.log("fetch id");
  // const idfetch = location.state.id;
  // console.log(location.state.id);

  const [details, setDetails] = useState({});
  const id = location.state.id;
  console.log(location.state.id);
  const getData = () => {
    fetch(`${API}/cars/${location.state.id}`)
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // console.log("hello2")
  console.log(details);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const parts = [
  //   {
  //     span1: "1",
  //     span2: "Anti-Lock Braking",
  //   },
  //   {
  //     span1: "2",
  //     span2: "Premium Headlights",
  //   },
  //   {
  //     span1: "3",
  //     span2: "Night Vision Windshield",
  //   },
  //   {
  //     span1: "4",
  //     span2: "Leather Seats",
  //   },
  //   {
  //     span1: "5",
  //     span2: "Best Quality Tires",
  //   },
  //   {
  //     span1: "6",
  //     span2: "Ground Clearance of 170mm",
  //   },
  //   {
  //     span1: "7",
  //     span2: "350 Liters Boot Capacity",
  //   },
  // ];

  return (
    <>
      <div className="impl_bread_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>purchase single</h1>
            </div>
            <hr style={{ width: "50vw" }} />
            <span style={{ color: "white", zIndex: "999" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              ea. <br />
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="impl_buy_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="impl_buycar_wrapper">
                <div className="impl_buycar_color" id="color_car">
                  <div className=" text-dark slider slider-for1">
                    <div>
                      <h3>
                        <img className="text-dark" src={details.image} alt="Car" />
                      </h3>
                    </div>
                  </div>
                  <div className="slider slider-nav1">
                    <div>
                      <span className={details.color}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="impl_buycar_data">
                <h1>
                  {details.company}, {details.model}
                </h1>
                <h1>{details.price} </h1>
                {/* <div className="car_emi_wrapper">
                  <span>Emi Starts at $2400 /- *</span>
                  <Link to="/">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    Get EMI Assistance
                  </Link>
                </div> */}
                <p>{details.description}</p>
                <div className="impl_old_buy_btn">
                  <Link to={`/Query/${id}`}  className="impl_btn">
                    Add Query
                  </Link>
              
                  <Link to="/Query" className="impl_btn">
                    Compare
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_spesi_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <div className="impl_car_spesi_list">
                <div className="impl_heading">
                  <h1 style={{ fontWeight: "bold" }}>Car Specifications</h1>
                </div>

                <Row>
                  {carSpecs.map((cs) => (
                    <Col lg={6}>
                      <h3>{cs.heading}</h3>
                      <div className="progress">
                        <div
                          className={cs.progressBar}
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </Col>
                  ))}
                  {carSpec.map((cs) => (
                    <Col lg={6}>
                      <h3>{cs.heading}</h3>
                      <div className="progress">
                        <div
                          className={cs.progressBar}
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 impl_padderleft impl_padderright">
              <div className="impl_car_spesi_img">
                <img src="images/purchase/car_spesi_img.html" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_carparts_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_carparts_inner">
                <div className="impl_carparts">
                  <div className="slider slider-for">
                    <div>
                      <div className="impl_slider_img">
                        <img src={main_car} alt="" />

                        <ul className="impl_car_prts">
                          <li>
                            <span className="impl_cr_no">1</span>
                            <span className="impl_cr_prts_des">
                              Anti-Lock Braking{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">2</span>
                            <span className="impl_cr_prts_des">
                              Premium Headlights{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">3</span>
                            <span className="impl_cr_prts_des">
                              Night Vision Windshield{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">4</span>
                            <span className="impl_cr_prts_des">
                              {" "}
                              Leather Seats
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">5</span>
                            <span className="impl_cr_prts_des">
                              {" "}
                              Best Quality Tires
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">6</span>
                            <span className="impl_cr_prts_des">
                              {" "}
                              Ground Clearance of 170mm
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">7</span>
                            <span className="impl_cr_prts_des">
                              {" "}
                              350 Liters Boot Capacity
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="impl_slider_img">
                        <img src={main_car1} alt="" />
                        <ul className="impl_car_prts">
                          <li>
                            <span className="impl_cr_no">1</span>
                            <span className="impl_cr_prts_des">
                              radiator support{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">2</span>
                            <span className="impl_cr_prts_des">
                              premium headlights
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">3</span>
                            <span className="impl_cr_prts_des">
                              Night Vision Windshield{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">4</span>
                            <span className="impl_cr_prts_des">
                              Leather Seats{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">5</span>
                            <span className="impl_cr_prts_des">
                              premium headlights
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">6</span>
                            <span className="impl_cr_prts_des">
                              solid bumber{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">7</span>
                            <span className="impl_cr_prts_des">mirror</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="impl_slider_img">
                        <img src={main_car2} alt="" />
                        <ul className="impl_car_prts">
                          <li>
                            <span className="impl_cr_no">1</span>
                            <span className="impl_cr_prts_des">
                              step bumper{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">2</span>
                            <span className="impl_cr_prts_des">
                              {" "}
                              tail lights
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">3</span>
                            <span className="impl_cr_prts_des">
                              Night Vision Windshield{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">4</span>
                            <span className="impl_cr_prts_des">grilles </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">5</span>
                            <span className="impl_cr_prts_des">
                              tailgates trunk lids{" "}
                            </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">6</span>
                            <span className="impl_cr_prts_des">silencer </span>
                          </li>
                          <li>
                            <span className="impl_cr_no">7</span>
                            <span className="impl_cr_prts_des">
                              tail light{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="slider slider-nav">
                    <div>
                      <div className="impl_thumb_ovrly">
                        <img src={car_part2} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="impl_thumb_ovrly">
                        <img src={car_part1} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="impl_thumb_ovrly">
                        <img src={car_part3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_descrip_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_heading">
                <h1 className="text-white">description</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Car Brand</h2>
                <p>{details.company}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Fuel Economy</h2>
                <p>{details.fuel_type}</p>
                <p>city/highway: {details.mileage} mpg</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Engine Type</h2>
                <p>{details.engine}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Transmission</h2>
                <p>{details.gear}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Displacment</h2>
                <p>{details.engine_power} cc</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Vehicle Type</h2>
                <p>{details.categories}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Performance</h2>
                <p>{details.passanger_capacity}:Passenger</p>
                <p>{details.air_bags}:Air Bags</p>
                <p>{details.km}:KM Run</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="impl_descrip_box">
                <h2>Dimensions</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_review_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_heading">
                <h1>user reviews</h1>
              </div>
            </div>
            {/* <div className="col-lg-10 offset-lg-1"> */}
            <Slider {...settings}>
              {reviewSlider.map((rs) => (
                <div className="impl_review_box">
                  <h2>{rs.heading}</h2>
                  {reviewRating.map((rr) => (
                    <ul className="review_rating">
                      <li>
                        <i className={rr.icon} aria-hidden={rr.aria}></i>
                      </li>
                    </ul>
                  ))}
                  <div className="review_date">
                    <i className={rs.clock} aria-hidden="true"></i>
                    {rs.date}
                  </div>
                  <p>{rs.para}</p>
                  <h4 className="review_author">{rs.h4}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Newsingle;
