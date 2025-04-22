import React from "react";

function Item(props) {
  return (
    <div className="item">
      <li>
        <img src={props.img} className="img"></img>
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </li>
    </div>
  );
}

export default Item;
