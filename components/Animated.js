import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/animm.json";

function Animated() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      return <Lottie options={defaultOptions}/>;
}

export default Animated
