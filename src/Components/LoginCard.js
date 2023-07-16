import React, { useState } from "react";
import {AiOutlineMail} from "react-icons/ai"
import {BsKey} from "react-icons/bs"
import swal from "sweetalert";
import { API } from "../Hooks/backend";
import "../Screens/Login/login.css";

const LoginCard = () => {
  const [toggle, setToggle] = useState(false);

  const tog = () => {
    setToggle(!toggle);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // async function loginUser(credentials) {
  //   console.log(credentials);
  //   return fetch(`${API}/admin/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }).then((data) => data.json());
  // }

  const loginUser = async (credentials) => {
    await fetch(`${API}/admin/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials),
    })
    .then((res) => res.json())
    .then((response) => {
      if(response.status === 200){
        console.log("Logged in");
      }
      else{
        console.log("something went wrong");
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({ email, password });
    console.log(response);

    if ("token" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/profile";
      });
    } else {
      console.log(response.message);
      swal("Failed", response.message, "error");
    }
  };
  return (
    <>
      <div className="left-login main_login login_form reziseofloginform">
        <h2 className="head-login">Login Form</h2>
        <div id="login">
          <form className="form" onSubmit={handleSubmit}>
            <p className="fieldset">
            <AiOutlineMail style={{position:"absolute",marginTop:15,width:50,fontSize:"25px",opacity:0.7}} className="text-dark" />

              <label className="image-replace email text-dark" for="signin-email">
                
                E-mail
              </label>
              <input
                className="full-width has-padding has-border"
                id="signin-email"
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error-message">
                An account with this email address does not exist!
              </span>
            </p>

            <p className="fieldset">
            <BsKey style={{position:"absolute",marginTop:15,width:50,fontSize:"25px",opacity:0.7}} className="text-dark" />

              <label className="image-replace password text-dark" for="siin-password">
                Password
              </label>
              <input
                className="full-width has-padding has-border"
                id="signin-password"
                type={toggle ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <a href="#0" className="hide-password " onClick={tog}>
                {toggle ? "Hide" : "Show"}
              </a>
              <span className="error-message">Wrong password! Try again.</span>
            </p>

            <p className="fieldset">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me"> Remember me</label>
            </p>

            <p className="fieldset">
              <input className="full-width" type="submit" value="Login" />
            </p>

            <p className="form-bottom-message">
              <a href="#0">Forgot your password?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
