import React from "react";
import "../Login/login.css";
import LoginCard from "../../Components/LoginCard";
// import RegistrationCard from "../../Components/RegistrationCard";

const Login = () => {
  return (
    <>
      <div className="mainscreen">
        <LoginCard /> 
        <div className="vl lineof"></div>
        {/* <RegistrationCard /> */}
      </div>
    </>
  );
};

export default Login;
