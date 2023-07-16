import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import {FeaCar1} from "../images/index"

const Cardc = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [current, setCurrent] = useState("");
  const totalPages = Math.ceil(props.data.length / 12);
  const navigate = useNavigate();
console.log(currentPage);
  const navigateToSingleCar = (c) => {
    navigate("/Newsingle",{state:{id:c._id}});
    window.location.reload(false);
  };

  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };


  // useEffect(()=>{
  //   for(const i = 0, len = props.data.length;)
  // })
  return (
    <>

      {props.data.slice(pagination.start, pagination.end).map((c) => (
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="impl_fea_car_box">
            <div className="impl_fea_car_img">
              {console.log(c.images)}
              <img
                src={c.images}
                alt=""
                className="img-fluid impl_frst_car_img"
              />
              <img
                src={c.images}
                alt=""
                className="img-fluid impl_hover_car_img"
              />
              {/* <span className="impl_img_tag" title="compare">
                <a href="/compare">
                  <i className={c.icon} aria-hidden="true"></i>
                </a>
              </span> */}
            </div>
            <div className="impl_fea_car_data">
              {/* <h2>
                <a href="/Newsingle">{c.name}</a>
              </h2> */}
              <ul>
                <li>
                  <span className="impl_fea_title">Company</span>
                  <span className="impl_fea_name">
                    {c.company}
                  </span>
                </li>
                <li>
                  <span className="impl_fea_title">Model </span>
                  <span className="impl_fea_name">
                    {c.model}
                  </span>
                </li>
                <li>
                  <span className="impl_fea_title">Year</span>
                  <span className="impl_fea_name">{c.year}</span>
                </li>
                <li>
                  <span className="impl_fea_title">Color</span>
                  <span className="impl_fea_name">{c.color}</span>
                </li>
                <li>
                  <span className="impl_fea_title">KM</span>
                  <span className="impl_fea_name">{c.km}</span>
                </li>
                <li>
                  <span className="impl_fea_title">Price</span>
                  <span className="impl_fea_name">{c.price}</span>
                </li>
              </ul>
              <div className="impl_fea_btn">
                {console.log(c,"c")}
                <button
                  className="impl_btn"
                  onClick={() =>  navigateToSingleCar(c)}
                >
                  <span className="impl_doller">Buy Now </span>
                  <span className="impl_bnw">View Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
           {/* <Pagination
      {...bootstrap5PaginationPreset}
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage} */}
    {/* /> */}
    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={props.data.length}/>
    </>
  );
};

export default Cardc;
