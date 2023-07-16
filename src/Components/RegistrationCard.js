import React, { useState, useRef } from "react";
import swal from "sweetalert";
import "../Screens/Login/login.css";

const RegistrationCard = () => {
  const [toggle2, setToggle2] = useState(false);

  const tog2 = () => {
    setToggle2(!toggle2);
  };
  const [submit, setSubmit] = useState("Submit");

  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  //with the useref hook you can do it easily
  const form = useRef(null);

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setSubmit("Sending...");
    const { firstname, surname, email, password, phone, location } =
      e.target.elements;
    let details = {
      name: firstname.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      location: location.value,
    };

    // eslint-disable-next-line no-unused-vars
    let response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        console.log(data.message);
        swal("Success", data.message, "success", {
          buttons: false,
          timer: 2000,
        });

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error", error);
        // alert(error);
        swal("Failed", error, "error");
      });
    form.current.reset(); //this will reset all the inputs in the form
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter confrim password :";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  return (
    <>
      <div className="right-signup signup_form_page reziseofsignupform">
        <h2 className="head-register">Registration Form</h2>
        <div id="signup">
          <form ref={form} className="form" onSubmit={handleSubmit2}>
            <p className="fieldset">
              <label className="image-replace username" for="signup-username">
                Username
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-username"
                name="firstname"
                type="text"
                placeholder="Username"
                required
              />
              <span className="error-message">
                Your username can only contain numeric and alphabetic symbols!
              </span>
            </p>

            <p className="fieldset">
              <label className="image-replace lastname" for="signup-lastname">
                Lastname
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-lastname"
                name="surname"
                type="text"
                placeholder="Lastname"
                required
              />
              <span className="error-message">
                Your username can only contain numeric and alphabetic symbols!
              </span>
            </p>

            <p className="fieldset">
              <label className="image-replace email" for="signup-email">
                E-mail
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
              />
              <span className="error-message">
                Enter a valid email address!
              </span>
            </p>

            <p className="fieldset">
              <label className="image-replace password" for="signup-password">
                Password
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-password"
                type={toggle2 ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={onInputChange}
                onBlur={validateInput}
                required
              />
              {error.password && <span>{error.password}</span>}
              <a href="#0" className="hide-password" onClick={tog2}>
                {toggle2 ? "Hide" : "Show"}
              </a>
              <span className="error-message">
                Your password has to be at least 6 characters long!
              </span>
            </p>
            <p className="fieldset">
              <label
                className="image-replace confirmPassword"
                for="signup-confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-confirmpassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={onInputChange}
                onBlur={validateInput}
                required
              />
              {error.confirmPassword && <span>{error.confirmPassword}</span>}
              <span className="error-message">
                Your password has to be at least 6 characters long!
              </span>
            </p>
            <p className="fieldset">
              <label className="image-replace phone" for="signup-phone">
                Phone
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-phone"
                type="tel"
                placeholder="Phone"
                name="phone"
                pattern="^\d{10}$"
                required
              />
              <span className="error-message">
                Your phone can only contain numeric values!
              </span>
            </p>

            <p className="fieldset">
              <label className="image-replace location" for="signup-location">
                Location
              </label>
              <input
                className="full-width has-padding has-border"
                id="signup-location"
                name="location"
                type="text"
                placeholder="Location"
                required
              />
              <span className="error-message">
                Your location can only contain numeric and alphabetic symbols!
              </span>
            </p>

            <p className="fieldset">
              <input type="checkbox" id="accept-terms" />
              <label for="accept-terms">
                I agree to the{" "}
                <a className="accept-terms" href="#0">
                  Terms
                </a>
              </label>
            </p>
            <p className="fieldset">
              <input className="full-width submitForm" type="submit" value={submit} />
            </p>
            {/* <button type="submit" className="impl_btn submitForm">
              {submit}
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationCard;
