import React from "react";
import Item from "../Item";

import { data } from "../../../data";
console.log(data);

function CardItem() {
  console.log({ ...data });
  return (
    <div className="wrap-img">
      {/* <Item
        img={data[0].image}
        desc={data[0].desc}
        title={data[0].title}
        className="img"
      />
      <Item
        img={data[1].image}
        desc={data[1].desc}
        title={data[1].title}
        className="img"
      />
      <Item
        img={data[2].image}
        desc={data[2].desc}
        title={data[2].title}
        className="img"
      />
      <Item
        img={data[3].image}
        desc={data[3].desc}
        title={data[3].title}
        className="img"
      /> */}

      {/*TODO: sử dụng spread() */}
      <Item {...data[0]} />
      <Item {...data[1]} />
      <Item {...data[2]} />
      <Item {...data[3]} />
    </div>
  );
}

export default CardItem;
