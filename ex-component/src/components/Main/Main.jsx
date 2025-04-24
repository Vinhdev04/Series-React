import React from "react";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import "./Main.css";
import { data } from "../../../data";
function Main() {
  return (
    <>
      <Banner />
      <div className="wrap">
        <Sidebar />
        <Card items={data.slice(0, 4)} /> {/* Khối đầu tiên: 3 item */}
      </div>
      <div className="wrap">
        <Sidebar />
        {/* Khối thứ hai: 6 item */}
        <div className="list">
          <Card items={data.slice(0, 8)} />
          {/* <Card items={data.slice(0, 4)} />
          <Card items={data.slice(0, 4)} /> */}
        </div>{" "}
      </div>
    </>
  );
}

export default Main;
