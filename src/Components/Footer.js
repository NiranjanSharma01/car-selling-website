import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logo } from "../images";
import {API} from "../Hooks/backend"
import axios from "axios";


const Footer = () => {
  const [status, setStatus] = useState("Submit");
  const [email, setEmail]= useState("");
  const Handl = () => {
    axios
      .post(
        `${API}/newsletter/`,
        {
      
          email: email,
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  

  console.log(email);
  return (
    <>
      <div  className="impl_footer_wrapper">
        <div  className="impl_social_wrapper">
          <ul style={{backgroundColor:"rgb(255 65 57)",paddingTop:10,paddingBottom:10}}>
            <li className="marreduce">
              <Link to="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-rss" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link  to="/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="impl_foo_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box footer_abt_text">
                  <a href="index.html">
                    <img src={logo} alt="" style={{ width: "30%" }} />
                  </a>
                  <p>
                    We provide a service that can be used by anyone who needs to
                    purchase a car. We have years of experience in the industry
                    and we know what it takes to find the right car for the
                    right price.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">Basic Information</h1>
                  <ul>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Changing Oil
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Saving Fuel
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Antilock Brakes
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Battery
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Tips On Long Car Trips
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Air Pressure
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Tire Replacement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">contact us</h1>
                  <ul>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-phone text-dark" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text ">
                        <a href="tel:+917976661986">+91-7976661986</a>
                      </div>
                    </li>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-map-marker text-dark" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text">
                        <a href="https://www.google.com/maps/dir/26.8566528,75.7727232/Royal+Exotica+Near+Talab+factory+Nibm+Road+Pune+%22411048%22/@22.6104071,70.0594635,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2eb1a4868d1f1:0xef47d2affcdfb0ca!2m2!1d73.8909705!2d18.4587116">
                          Royal Exotica Near Talab factory Nibm Road Pune -
                          411048
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-envelope text-dark" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text">
                        <a href="mailto:automanicars@gmail.com">
                          automanicars@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">Subscribe </h1>
                  <p>
                    Subscribing to our newsletter, we will send you updates
                    about new cars and how they rank in terms of safety and
                    efficiency.
                  </p>
                  <div className="impl_footer_subs">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button onClick={Handl} className="foo_subs_btn">
                      <i style={{position:"absolute",marginTop:-5,marginRight:8}}
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="impl_btm_footer footer_query">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p className="impl_copyright">
                Copyright © 2023
                <span className="foo-txt">
                  <a
                    className="foo-txt"
                    href="/"
                    style={{ color: "rgb(255, 38, 0)", marginLeft: "5px" }}
                  >
                    Automani Cars
                  </a>
                </span>
                .
              </p>
            
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
