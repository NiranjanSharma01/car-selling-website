import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Sellcar = () => {


  const [input, setInputs] = useState({});

  const [logoProfile, setLogoProfile] = useState("");
  const [logoCover, setLogoCover] = useState([]);
  const [images, setImages] = useState([]);
  const handleMultipleImages = (evnt) => {
   
  };
  const Handal = (e) => {
    e.preventDefault();
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };



  const Change1 = (e) => {
    e.preventDefault();
    if(e.target.files.length < 5){
    setLogoCover(e.target.files[0]);
    const selectedFIles = [];
    const targetFiles = e.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });

      setImages(selectedFIles);
    }
    else{
      alert("error")
    }
  };
  console.log("length", logoCover);

  console.log(images, input);
  const formData = new FormData();
  const Submit = async (e) => {
    e.preventDefault();
    formData.append("company", input.firstName);
    formData.append("model", input.lastName);
    formData.append("brake_type", input.mobile);
    formData.append("model", input.email);
    formData.append("year", input.city);
    formData.append("air_bags", input.state);
    formData.append("fuel_type", input.pincode);
    formData.append("gear", input.company);
    formData.append("km", input.model);
    formData.append("engine_power", input.year);
    formData.append("mileage", input.kmDriven);
    formData.append("int_color", input.color);
    formData.append("color", input.price);
    images.forEach((element) => {
      console.log(element);
      formData.append(`images`, element);
    });

    console.log(formData);
      const config = {
        url:`http://localhost:5000/sell/`,
        method:'post',
        headers: {
          // 'Content-Type': 'application/json',
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ${localStorage.getItem("token")}` 
        },
        data: formData
      }
      try {
        const response = await axios(config);
        console.log(response);
        if(response.status===200){
          toast.success("Update Successful");
        }
        else {
          toast.error("Somthing went Wrong! Please try after some time!")
        }
      }
      catch  (error){
        console.log(error.message);
      }
     
  };
  return (
    <>
    <Toaster/>
      <div class="impl_bread_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1>sell your car</h1>
            </div>
            <hr style={{width:"40vw"}} />
              <span style={{ color:'white', zIndex:'999'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea. <br /><p>Lorem ipsum dolor sit amet.</p></span>
          </div>
        </div>
      </div>
      <div class="impl_sell_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="impl_heading">
                <h1>Sell your car in just 3 easy steps</h1>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <form id="impl_sform" action="#">
                <div class="impl_steps_wrapper">
                  <section>
                    <div class="impl_step">
                      <h2 class="step-title">Contact Details</h2>
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="firstName"
                              name="firstName"
                              onChange={Handal}
                              type="text"
                              class="form-control required"
                              placeholder="YOUR FIRST NAME"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="surName"
                              name="surName"
                              type="text"
                              onChange={Handal}
                              class="form-control required"
                              placeholder="YOUR SECOND NAME"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_mobile"
                              type="number"
                              name="mobile"
                              onChange={Handal}
                              pattern="[0-9]{10}"
                              class="form-control required number"
                              placeholder="YOUR MOBILE NUMBER"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_mail"
                              type="email"
                              name="email"
                              class="form-control required email"
                              placeholder="YOUR EMAIL"
                              data-valid="email"
                              data-error="Email should be valid."
                              onChange={Handal}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_city"
                              type="text"
                              name="city"
                              class="form-control required"
                              placeholder="CITY"
                              onChange={Handal}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_state"
                              type="text"
                              name="state"
                              class="form-control required"
                              placeholder="STATE"
                              onChange={Handal}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_pin"
                              type="string"
                              name="pincode"
                              class="form-control required number"
                              placeholder="PINCODE"
                              pattern="[0-9]{6}"
                              onChange={Handal}
                              maxlength="6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <br />
                  <br />
                  <section>
                    <div class="impl_step">
                      <h2 class="step-title">Car Details</h2>
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_brand"
                              type="text"
                              name="BRND"
                              class="form-control required"
                              placeholder="CAR BRAND"
                              onChange={Handal}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_modal"
                              type="text"
                              name="model"
                              class="form-control required"
                              placeholder="MODEL"
                              onChange={Handal}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_year"
                              type="number"
                              name="year"
                              class="form-control required number"
                              placeholder="YEAR"
                              onChange={Handal}

                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_meter"
                              type="number"
                              name="meter"
                              class="form-control required"
                              placeholder="KILOMETERS DRIVEN"
                              onChange={Handal}

                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_color"
                              type="text"
                              name="color"
                              class="form-control required"
                              placeholder="COLOR"
                              onChange={Handal}

                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_price"
                              type="number"
                              name="price"
                              class="form-control required"
                              placeholder="PRICE"
                              onChange={Handal}

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="impl_step">
                      <ul class="step_car_img">
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <input
                            type="file"
                            name="images"
                            id="files"
                            onChange={Change1}
                            multiple
                            max ="5" 
                           />
                          {/* <div class="step_car_select">
                            <i class="fa fa-times" aria-hidden="true"></i>
                          </div> */}
                        </li>
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <input type="file"  />
                          {/* <div class="step_car_select">
                            <i class="fa fa-times" aria-hidden="true"></i>
                          </div> */}
                        </li>
                        <li>
                          <img
                            src="assets/images/sell/upload.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <input type="file" />
                        </li>
                        <li>
                          <img
                            src="assets/images/sell/upload.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <input type="file" />
                        </li>
                        <li>
                          <img
                            src="assets/images/sell/upload.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <input type="file" />
                        </li>
                      </ul>
                    </div>
                    <button onClick={Submit} className="impl_btn">Submit</button>
                  </section>
                  {/* <h3>
                    <span class="step_number">4</span>
                  </h3>
                  <section>
                    <div class="impl_step">
                      <h2 class="step-title">overview</h2>
                      <ul class="step_car_img">
                        <li class="">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img"
                          />
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img_over"
                          />
                        </li>
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img"
                          />
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img_over"
                          />
                        </li>
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img"
                          />
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img_over"
                          />
                        </li>
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img"
                          />
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img_over"
                          />
                        </li>
                        <li class="step_imgs">
                          <img
                            src="assets/images/sell/sell_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img"
                          />
                          <img
                            src="assets/images/sell/sell_hover_img1.jpg"
                            alt=""
                            class="img-fluid step_view_img_over"
                          />
                        </li>
                      </ul>
                      <div class="step_car_features">
                        <ul>
                          <li>
                            <span class="fea_name">car brand</span>{" "}
                            <span class="fea_colon">: </span>
                            <span class="fea_value">Serpent</span>{" "}
                          </li>
                          <li>
                            <span class="fea_name">color</span>{" "}
                            <span class="fea_colon">: </span>
                            <span class="fea_value">white</span>{" "}
                          </li>
                          <li>
                            <span class="fea_name">model</span>{" "}
                            <span class="fea_colon">: </span>
                            <span class="fea_value">Serpentz8 </span>{" "}
                          </li>
                          <li>
                            <span class="fea_name">driven</span>{" "}
                            <span class="fea_colon">: </span>{" "}
                            <span class="fea_value">12000 kms </span>{" "}
                          </li>
                          <li>
                            <span class="fea_name">year</span>{" "}
                            <span class="fea_colon">: </span>
                            <span class="fea_value">2015 </span>{" "}
                          </li>
                          <li>
                            <span class="fea_name">price</span>{" "}
                            <span class="fea_colon">: </span>
                            <span class="fea_value">$81000</span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellcar;
