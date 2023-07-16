import React, { useState, useEffect } from "react";
import { AiOutlineDoubleRight,AiOutlineDoubleLeft } from "react-icons/ai";
import { Button, ButtonToolbar } from "react-bootstrap";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  //   const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage));
  const numberOfButtons = Math.ceil(total / showPerPage);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center my-5">
      <nav nav aria-label="Page navigation example">
        <ul className="pagination" style={{ height: "15px" }}>
          <li className="page-item" style={{ display: numberOfButtons === 1 && "none", cursor: "pointer", }}>
            <a className="page-link" onClick={() => onButtonClick("prev")} style={{ height: "40px", fontSize: "1rem" }}><AiOutlineDoubleLeft/></a>
          </li>
          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li key={index} className={`page-item ${index + 1 === counter ? "active" : null}`} style={{ cursor: "pointer" }}>
              <a className="page-link" onClick={() => setCounter(index + 1)} style={{ height: "40px", fontSize: "1rem" }}>{index + 1}</a>
            </li>
          ))}
          <li className="page-item" style={{ cursor: "pointer", height: "15px", display: numberOfButtons === 1 && 'none' }}>
            <a className="page-link" onClick={() => onButtonClick("next")} style={{ height: "40px", fontSize: "1rem" }}><AiOutlineDoubleRight /></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;