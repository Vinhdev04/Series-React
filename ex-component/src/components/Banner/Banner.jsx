import React from "react";
import slider from "../../assets/images/slider_1.jpg";
function Banner() {
  return (
    <div className="wrap-banner">
      <img
        src={slider}
        alt="Banner"
        className="banner"
        style={{ width: "100%" }}
      ></img>
    </div>
  );
}

export default Banner;
