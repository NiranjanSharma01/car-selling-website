import React, { useState, useEffect } from "react";


const SelectCars = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(props.data);
  }, [state]);

  console.log(props.data);

  return (
    <>
      {state.map((sc2) => (
        <div className="impl_cmpr_box"> 
          <h2 className="impl_cmpr_title">{sc2.h2}</h2>
          <div className="compare_select_box custom_select">
            <select style={{width:"18vw"}}>
              <option data-display={sc2.dataDisplay}>{sc2.o1}</option>
              <option className="compare_select_box_option" value="1">{sc2.b1}</option>
              <option value="2">{sc2.b2}</option>
              <option value="3">{sc2.b3}</option>
              <option value="4">{sc2.b4}</option>
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectCars;
