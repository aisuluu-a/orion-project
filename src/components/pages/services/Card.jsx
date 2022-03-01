import React from "react";
import "./card.scss";

const ServiceCard = ({ imgSrc, name, description }) => {
  return (
    <div className="ServiceCard">
      <img className="gc-image" src={imgSrc} alt={name} />
      <div className="gc-name">{name}</div>
      {/* <div className="gc-description">{description}</div> */}
    </div>
  );
};

export default ServiceCard;
