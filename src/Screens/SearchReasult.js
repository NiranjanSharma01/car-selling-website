import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cardc from "../Components/Cardc";


 const Search = (props) => {
  
  const location = useLocation();
  const data = location.state.data;
  console.log(data ,"xcdfghj");

  const productBrand = [
    {
      label: "Paradox",
    },
    {
      label: "Voyage",
    },
    {
      label: "Passion",
    },
    {
      label: "Curiosity",
    },
    {
      label: "Ivory",
    },
    {
      label: "Dawn",
    },
    {
      label: "Temper",
    },
    {
      label: "Thunder",
    },
    {
      label: "Blade",
    },
    {
      label: "Origin",
    },
    {
      label: "Titan",
    },
    {
      label: "Dominion",
    },
    {
      label: "Ferocity",
    },
    {
      label: "Tempest",
    },
    {
      label: "Flow",
    },
    {
      label: "Prime",
    },
    {
      label: "Grit",
    },
    {
      label: "Nimbus",
    },
    {
      label: "Essence",
    },
    {
      label: "Aura",
    },
  ];
  const productColor = [
    {
      color: "black",
    },
    {
      color: "blue",
    },
    {
      color: "white",
    },
    {
      color: "yellow",
    },
    {
      color: "red",
    },
    {
      color: "grey",
    },
    {
      color: "brown",
    },
    {
      color: "orange",
    },
  ];
  const productType = [
    {
      type: "Hatchback",
    },
    {
      type: "Sedan",
    },
    {
      type: "MPV",
    },
    {
      type: "SUV",
    },
    {
      type: "Couple",
    },
    {
      type: "Convertible",
    },
  ];



  return (
    <>
      <div className="impl_bread_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>purchase </h1>
          </div>
              <hr />
              <span style={{ color:'white', zIndex:'999'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea. <br /><p>Lorem ipsum dolor sit amet.</p></span>           

              
              
               </div>
        </div>
      </div>
      <div className="impl_purchase_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="impl_sorting_text custom_select">
                <span className="impl_show"> Showing 9 of 68 Results</span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="impl_purchase_inner">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="impl_sidebar">
                      <div className="impl_product_search widget woocommerce">
                        <div className="impl_footer_subs">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                          />
                          <button className="foo_subs_btn">
                            <i style={{position:"absolute",marginTop:-9,fontSize:18}} className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div className="impl_product_brand widget woocommerce">
                        <h2 className="widget-title">brands</h2>
                        {productBrand.map((pb) => (
                          <ul>
                            <li>
                              <label className="brnds_check_label">
                                {pb.label}
                                <input type="checkbox" name="check" />
                                <span className="label-text"></span>
                              </label>
                            </li>
                          </ul>
                        ))}
                      </div>

                      <div className="impl_product_color widget woocommerce">
                        <h2 className="widget-title">color</h2>
                        {productColor.map((pc) => (
                          <ul>
                            <li>
                              <label className="brnds_check_label">
                                {pc.color}
                                <input type="checkbox" name="check"></input>
                                <span className="label-text"></span>
                              </label>
                            </li>
                          </ul>
                        ))}
                      </div>
                      <div className="impl_product_price widget woocommerce">
                        <h2 className="widget-title">price range</h2>
                        <div className="price_range">
                        <label>price range</label>
                        <input style={{}}
                          type="range"
                          id="range_24"
                          name="ionRangeSlider"
                          value=""
                        />
                      </div>
                      </div>
                     
                      <div style={{color:"black",marginTop:"15%"}} >
                        <h2 className="text-dark">car type</h2>
                        {productType.map((pt) => (
                          <ul style={{color:"black",marginTop:"10%"}}>
                            <li style={{color:"black"}} >
                              <Link style={{color:"black"}} to="/">{pt.type}</Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-8">
                    <div className="row">
                      <Cardc data={data} />
                    
                    </div>
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

export default Search;
