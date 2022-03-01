import React, { useState, useEffect } from "react";
import "./servicesMain.scss";
import ServicesMainImg from "../../../images/ServicesMain1.jpeg";

function ServicesMain(props) {
  return (
    <div className="services-main">
      <div className="services-main-left">
        <h1>{props.serviceTitle}</h1>
        <h4>{props.serviceSubTitle}</h4>
        <p>{props.serviceText}</p>
      </div>
      <div className="services-main-right">
        <img src={props.serviceImgSrc} alt={props.serviceTitle} />
      </div>
    </div>
  );
}

export default ServicesMain;
