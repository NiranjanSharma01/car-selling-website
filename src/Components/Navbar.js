import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../images/index";
import "./Navbar.css";

const Navbar = (props) => {
  
  const headerSocial = [
    {
      classname: "fa fa-facebook fbook",
      aria: "true",
    },
    {
      classname: "fa fa-twitter  fbook",
      aria: "true",
    },
    {
      classname: "fa fa-instagram fbook",
      aria: "true",
    },
    {
      classname: "fa fa-linkedin  fbook",
      aria: "true",
    },
  ];
  function refreshPage() {
    window.location.reload(false);
  }

  console.log("xcvb",props.touch);
  return (
    <>
      <div className="impl_header_wrapper">
        <div className="impl_logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="img-fluid" style={{width:"30%", marginLeft:"15%"}} />
            </Link>
        </div>
        <div className="impl_top_header">
          <div className="container main_container">
            <div className="row main_subcontainer">
              <div className="col-lg-12 col-md-12">
                <div className="impl_top_info">
                  {headerSocial.map((hs) => (
                    <ul className="impl_header_social headerSocial">
                      <li>
                        <Link to="/" className="kaibhi">
                          <i className={hs.classname} aria-hidden={hs.aria}></i>
                        </Link>
                      </li>
                    </ul>
                  ))}
                  
                  <p className="impl_header_time  ">
                    <i
                      // className="fa fa-clock-o clocksetout"
                      aria-hidden="true"
                    ></i>
                  </p>
                  <ul className="impl_header_icons header_icons">
                    <li className="impl_search">
                      <span>
                        <i onClick={()=>props.setTouch(!props.touch)} className="fa fa-search " aria-hidden="true"></i>
                      </span>
                    </li>
                    <li>
                      <Link to="/compare">
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" data-toggle="modal">
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="impl_search_overlay barBtnSearch">
                    {props.touch === false && (
                    <div className="impl_search_area">
                      <div className="srch_inner">
                        <form action="#">
                          <input type="text" placeholder="Search here... " />
                          <button style={{backgroundColor:"red"}} type="submit">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                          </button>   
                        </form>
                        <div className="srch_close_btn">
                          <span className="srch_close_btn_icon">
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                     )} 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="signin">
          <div className="impl_signin">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="impl_sign_form">
              <h1>Sign In</h1>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                ></input>
                <span className="form_icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                ></input>
                <span className="form_icon">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="forget_password">
                <div className="remember_checkbox">
                  <label>
                    Keep me signed in
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <a href="/">Forgot Password ?</a>
              </div>
              <a href="/" className="impl_btn">
                submit
              </a>
              <p>
                Dont Have An Account?{" "}
                <a className="impl_modal" href="#signup" data-toggle="modal">
                  Sign Up
                </a>
              </p>
            </div>
            <div className="impl_sign_img">
              <h2>Welcome To Impel Cars</h2>
              <p>A Perfect Zone To Sell And Purchase Cars</p>
              <div className="impl_sign_bottom">
                <h3>It's Not Just A Car </h3>
                <h3>It's Someone's Dream</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="signup">
          <div className="impl_signin">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="impl_sign_form">
              <h1>Sign up</h1>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
                <span className="form_icon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                />
                <span className="form_icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
                <span className="form_icon">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                />
                <span className="form_icon">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <a href="/" className="impl_btn">
                sign up
              </a>
              <p>
                Dont Have An Account?{" "}
                <a href="#signup" data-bs-toggle="modal" className="impl_modal">
                  Sign Up
                </a>
              </p>
            </div>
            <div className="impl_sign_img">
              <h2>Welcome To Impel Cars</h2>
              <p>A Perfect Zone To Sell And Purchase Cars</p>
              <div className="impl_sign_bottom">
                <h3>It's Not Just A Car </h3>
                <h3>It's Someone's Dream</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="impl_menu_wrapper">
          <div className="container headerBar">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <button className="impl_menu_btn ">
                  {/* <i className="fa fa-car " aria-hidden="true"></i> */}
                  <i style={{color:"white"}} className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="impl_menu_inner">
                  <div  className="p12">
                  <p style={{letterSpacing:12,marginTop:-1,fontSize:17,marginLeft:"17px",paddingBottom:0}}>  Automani Cars</p>
                    {/* <a href="index.html">
                      <img src="" alt="Logo" className="img-fluid" />
                    </a> */}
                  </div>
                  {/* <Link to="/login" className="impl_btn sellcarquery">
                    Login
                  </Link> */}
                  <Link to="/Sellcar" className="impl_btn sellcarquery">
                    Sell your cars
                  </Link>
                  <div className="impl_menu">
                    <nav>
                      <div className="menu_cross">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </div>
                      <div className="active_page">
                        <ul>
                          <li  onClick={refreshPage} >
                            <Link to="/" className="active">
                              Home
                            </Link>
                          </li>
                          <li  onClick={refreshPage}>
                            <Link  to="/New">Shop</Link>
                          </li>
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/Blog">blog</Link>
                          </li>
                          <li>
                            <Link to="/compare">Compare</Link>
                          </li>
                          <li>
                            <Link to="/Contact">Contact us</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
