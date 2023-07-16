import React, { useState } from "react";
import swal from "sweetalert";
import {
  clock,
  count_car,
  count_car1,
  doller,
  h_service1,
  h_service2,
  h_service3,
  h_service4,
  h_service5,
  h_service6,
  h_service7,
  h_service8,
  insurance_car,
  key,
  query_img,
  repair,
  security,
  support,
  trophy,
  trust,
  user,
} from "../images";
import {API} from "../Hooks/backend"
const Services = () => {
  const serviceBox1 = [
    {
      img1: h_service1,
      img2: key,
      h3: "purchase",
    },
    {
      img1: h_service2,
      img2: doller,
      h3: "sell",
    },
    {
      img1: h_service3,
      img2: insurance_car,
      h3: "insurance",
    },
    {
      img1: h_service4,
      img2: trust,
      h3: "trusted agent",
    },
  ];
  const serviceBox2 = [
    {
      img1: h_service5,
      img2: repair,
      h3: "repair",
    },
    {
      img1: h_service6,
      img2: security,
      h3: "security",
    },
    {
      img1: h_service7,
      img2: clock,
      h3: "on time",
    },
    {
      img1: h_service8,
      img2: support,
      h3: "fulltime support",
    },
  ];
  const serviceRowData = [
    {
      img: count_car,
      data: 8210,
      p: "Cars in stock",
    },
    {
      img: trophy,
      data: 686,
      p: "awards",
    },
    {
      img: user,
      data: 6281,
      p: "customers",
    },
    {
      img: count_car1,
      data: 4100,
      p: "Cars Repaired",
    },
  ];
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, message,phone,date,model } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
      model:model.value,
      phone:phone.value,
      date:date.value,
    };
    let response = await fetch(`${API}/service/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    swal("Success", result.message, "success");
  };
  return (
    <>
      <div class="impl_bread_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1>service</h1>
            </div>
            <hr />
              <span style={{ color:'white', zIndex:'999'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea. <br /><p>Lorem ipsum dolor sit amet.</p></span>   
          </div>
        </div>
      </div>
      <div class="impl_provide_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="impl_heading">
                <h1>what we provide</h1>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="row">
                {serviceBox1.map((sb) => (
                  <div class="col-lg-6 col-md-6">
                    <div class="impl_facility_wrapper">
                      <img src={sb.img1} alt="" class="img-fluid" />
                      <div class="impl_ser_hover_ovrly">
                        <div class="impl_ser_text">
                          <img src={sb.img2} alt="key" />
                          <h3>{sb.h3}</h3>
                        </div>
                        <div class="impl_ser_text_ovrly"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="impl_service_video">
                <div class="impl_video_inner">
                  <div class="impl_servdo_video">
                    <span class="impl_play_icon">
                      <a
                        class="impl-popup-youtube"
                        href="https://www.youtube.com/watch?v=BqjuObIH1nY"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="impl_service_video">
                <div class="impl_video_inner  impl_ser_video_img">
                  <div class="impl_servdo_video">
                    <span class="impl_play_icon">
                      <a
                        class="impl-popup-youtube"
                        href="https://www.youtube.com/watch?v=BqjuObIH1nY"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="row">
                {serviceBox2.map((sb2) => (
                  <div class="col-lg-6 col-md-6">
                    <div class="impl_facility_wrapper">
                      <img src={sb2.img1} alt="" class="img-fluid" />
                      <div class="impl_ser_hover_ovrly">
                        <div class="impl_ser_text">
                          <img src={sb2.img2} alt="key" />
                          <h3>{sb2.h3}</h3>
                        </div>
                        <div class="impl_ser_text_ovrly"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="impl_counter_wrapper">
        <div class="container">
          <div class="row">
            {serviceRowData.map((srd) => (
              <div class="col-lg-3 col-md-6">
                <div class="impl_cont_box">
                  <div class="impl_count_img">
                    <img src={srd.img} alt="" />
                  </div>
                  <div class="impl_count_text">
                    <h1 class="count-no" data-to={srd.data} data-speed="10000">
                      {srd.data}
                    </h1>
                    <p>{srd.p}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="impl_query_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit}>
                <div class="impl_heading">
                  <h1>Ask An Expert</h1>
                </div>
                <div class="impl_query_form">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control require"
                          name="firstName"
                          placeholder="Enter Your First Name"
                        
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control require"
                          name="lastName"
                          placeholder="Enter Your Last Name"
                          
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control require"
                          name="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
              
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control require"
                          name="phone"
                          placeholder="Mobile No."
                          
                        />
                      </div>
                    </div>
                      
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="date"
                          class="form-control require"
                          name="date"
                          placeholder="Date"
                      
                        />
                      </div>
                    </div>
                      
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control require"
                          name="model"
                          placeholder="Model"
                          
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="input-group">
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="Enter Your Query"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input type="hidden" name="form_type" value="contact" />
                      <button style={{width:"20vw",marginLeft:120}} type="submit" class="impl_btn submitForm">
                        {status}
                      </button>
                      <div class="response text-center text-capitalize"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="impl_query_img">
                <img src={query_img} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
