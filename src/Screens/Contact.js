import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import swal from "sweetalert";
import { API } from "../Hooks/backend";

const Contact = ({ data }) => {
  const cardBox = [
    {
      h2: "phone",
      p1: "+91-7976661986",
      class: "fa fa-phone",
    },
    {
      h2: "address",
      p1: "Royal Exotica, Talab factory",
      p2: "Nibm Road Pune - 411048",
      class: "fa fa-home",
    },
    {
      h2: "E - mail",
      p1: "automanicars@gmail.com",
      class: "fa fa-envelope",
    },
  ];

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, subject, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let response = await fetch(`${API}/contactUs`, {
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
      <div className="impl_bread_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>contact</h1>
            </div>
            <hr />
            <span style={{ color: "white", zIndex: "999" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              ea. <br />
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="impl_contact_wrapper">
        <div className="container">
          <Row >
            <Col sm>
              <form onSubmit={handleSubmit} className="impl_con_form">
                <Row>
                <h1>get in touch</h1>
               
                  <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control require"
                        placeholder="YOUR FIRST NAME"
                        required
                      />
                    </div>
                  <div className="form-group">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control require"
                        placeholder="YOUR LAST NAME"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control require"
                        placeholder="YOUR EMAIL"
                        data-valid="email"
                        data-error="Email should be valid."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="SUBJECT"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="YOUR MESSAGE"
                        required
                      ></textarea>
                    </div>
                    <button
                      style={{ width: "20vw" }}
                      type="submit"
                      className="impl_btn submitForm"
                    >
                      {status}
                    </button>
                </Row>
              </form>
            </Col>
            <Col sm>
              <div className="offset-lg-1">
                <img
                  style={{ width: "100%", height: "auto",marginTop:"30%" }}
                  src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="impl_contact_info">
                <div className="row">
                  {cardBox.map((cb) => (
                    <div className="col-lg-4 col-md-4">
                      <div className="impl_contact_box">
                        <div className="impl_con_data">
                          <i className={cb.class} aria-hidden="true"></i>
                          <h2>{cb.h2}</h2>
                          <p>{cb.p1}</p>
                          <p>{cb.p2}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
