import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import { API } from '../Hooks/backend';

export const Query = () => {
  const location = useLocation();
  const id = useParams();
  console.log(id.id);
  const [status, setStatus] = useState("");
 const Handal=(e)=>{
    setStatus({
        ...status ,
        carId:id.id,
        [e.target.name]: e.target.value,
    })
   
 }
 const Change= async(e)=>{
    e.preventDefault();
    await fetch(`${API}/enquiry`,{
        method:"post",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(status)
    })
    .then((res)=>res.json())
    .then((response)=>{
        console.log(response);
        toast.success(response.message);
        setStatus({
            ...status,
            [e.target.name]: e.target.value,
        })
    })
    .catch((err)=>{
        console.log(err.message);
        toast.error(err.message);
    })
 }
  return (
    <div>
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
                              name="name"
                              type="text"
                              onChange={Handal}
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
                              name="surname"
                              type="text"
                              class="form-control required"
                              placeholder="YOUR SECOND NAME"
                              required
                              onChange={Handal}

                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_mobile"
                              type="tel"
                              name="phone"
                              pattern="[0-9]{10}"
                              class="form-control required number"
                              placeholder="YOUR MOBILE NUMBER"
                              required
                              onChange={Handal}

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
                            //   required
                              onChange={Handal}

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
                            //   required
                            onChange={Handal}

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
                            //   required
                            onChange={Handal}

                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_pin"
                              type="text"
                              name="pincode"
                              class="form-control required number"
                              placeholder="PINCODE"
                              pattern="[0-9]{6}"
                              maxlength="6"
                              onChange={Handal}

                            />
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </section>
                  <br />
                  <br />
                  {/* <section>
                    <div class="impl_step">
                      <h2 class="step-title">Car Details</h2>
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_brand"
                              type="text"
                              name="model"
                              class="form-control required"
                              placeholder="Model"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_modal"
                              type="text"
                              name="type"
                              class="form-control required"
                              placeholder="Car Type"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_year"
                              type="text"
                              name=" insurance"
                              class="form-control required number"
                              placeholder=" Insurance"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="form-group">
                            <input
                              id="step_meter"
                              type="text"
                              name="km"
                              class="form-control required"
                              placeholder="KILOMETERS DRIVEN"
                            />
                          </div>
                        </div>
                   
                      </div>
                    </div>
                  </section> */}
                  <section>
                <button onClick={Change} style={{width:"20vw",marginTop:50}} className="impl_btn sellcarquery">Submit</button>
                  </section>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>        
    </div>
  )
}
