import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Card.css";
// import { data } from "../../../data";

function Card({ items }) {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Card;
