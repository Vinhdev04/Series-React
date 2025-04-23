import React from "react";

//TODO: tối ưu việc dùng props bằng destructuring

function Item({ image, title, desc }) {
  return (
    <div className="item">
      <li>
        <img src={image} className="img"></img>
        <div className="content">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </li>
    </div>
  );
}

export default Item;
