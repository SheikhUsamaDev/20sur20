import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../Images/lottieFiles/balloon.json";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  useEffect(() => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("app-access-token");
    sessionStorage.removeItem("app-refresh-token");
  }, []);

  const LottieAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <button style={{ border: "0px" }}></button>
        <Lottie options={defaultOptions} />
      </div>
    );
  };

  return (
    <div className="success-screen">
      <div className="success-message">
        <FaCheckCircle className="success-icon" />  
        <h1>Payment Successful!</h1>
        <p>Your payment has been processed successfully.</p>
      </div>
      <div className="balloon-animation">
        <LottieAnimation />
      </div>
      <Link to="/login" className="go-to-home-link">
        <div className="go-to-home-button">Go To Home Page</div>
      </Link>
    </div>
  );
};

export default Success;
