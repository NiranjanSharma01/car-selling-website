import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { API } from "../Hooks/backend";
import {getAllCars} from "../Hooks/shopHook"
import {
  FeaCar1,
  FeaCar1_hover,
  FeaCar2,
  FeaCar3,
  FeaCar4,
  FeaCar5,
  FeaCar6,
  FeaCar7,
  FeaCar8,
  FeaCar9,
} from "../images/index";

const New = () => {
  const [details, fetchDetails] = useState([]);
 

  const getData = () => {
    fetch(`${API}/cars/`)
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        fetchDetails(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

 
  const cars = [
    {
      image1: FeaCar1,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Aurora",
      model: "model",
      aurora_811: "Aurora 811",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "white",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar2,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Serpent",
      model: "model",
      aurora_811: "Serpent EB",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "blue",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar3,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Basilisk",
      model: "model",
      aurora_811: "Basilisk 811",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "white",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar4,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Mirage",
      model: "model",
      aurora_811: "Mirage",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "white",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar5,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Realm",
      model: "model",
      aurora_811: "Realm",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "black",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar6,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Empire",
      model: "model",
      aurora_811: "Empire",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "yellow",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar7,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Universe",
      model: "model",
      aurora_811: "Universe",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "yellow",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar8,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Dawn",
      model: "model",
      aurora_811: "Dawn Z06",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "yellow",
      price: "$ 72000",
      buy: "buy now",
    },
    {
      image1: FeaCar9,
      image2: FeaCar1_hover,
      icon: "fa fa-exchange",
      name: "Crux",
      model: "model",
      aurora_811: "Crux Z06",
      vehicleStatus: "Vehicle Status",
      color: "Color",
      new: "New",
      white: "yellow",
      price: "$ 72000",
      buy: "buy now",
    },
  ];


  useEffect(() => {
    getAllCars().then((res)=>{
      fetchDetails(res.data)
    })
  }, []);

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
                      <Card data={details} />
                      {/* <Card data={details} />
                      <Card data={details} />
                      <Card data={details} /> */}
                      {/* <div className="col-lg-12 col-md-12">
                        <div className="impl_pagination_wrapper">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                               <li className="page-item">
                                <a className="page-link" href="/">
                                  <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li> 
                               <li className="page-item">
                                <Link className="page-link active" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  3
                                </Link>
                              </li> 
                              <li className="page-item">
                                <a className="page-link" href="/">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li> 
                            </ul>
                          </nav>
                        </div>
                      </div> */}
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

export default New;
