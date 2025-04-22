import React from "react";
import Item from "../Item";

import images06 from "../../assets/images/poodle-06.png";
import images03 from "../../assets/images/poodle-04.png";
import images04 from "../../assets/images/poodle-05.png";

function CardItem() {
  return (
    <div className="wrap-img">
      <Item img={images04} desc="Test 01" title="Poodle 01" className="img" />
      <Item img={images06} desc="Test 02" title="Poodle 02" className="img" />
      <Item img={images03} desc="Test 03" title="Poodle 03" className="img" />
      <Item img={images04} desc="Test 04" title="Poodle 04" className="img" />
    </div>
  );
}

export default CardItem;
