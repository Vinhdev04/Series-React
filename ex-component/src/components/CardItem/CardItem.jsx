import React from "react";

function CardItem({ images, title, desc }) {
  return (
    <div className="card-item">
      <div className="card-img">
        <img src={images}></img>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default CardItem;
