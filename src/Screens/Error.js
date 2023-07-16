import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div class="impl_bread_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1>404 page</h1>              
            </div>
          </div>
        </div>
      </div>

      <div class="impl_error_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="error_text">
                <div class="error_text_inner">
                  <span class="err_1">4</span>
                  <span class="err_2">0</span>
                  <span class="err_3">4</span>
                </div>
                <h1>ooopps....</h1>
                <p>The Page you were looking for, couldn't be found. </p>
                <Link to="/" class="impl_btn">
                  home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
