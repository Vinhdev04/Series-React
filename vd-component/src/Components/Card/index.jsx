import { Row } from "antd";
import React from 'react';
import data from "../../data.js";
import CardItem from "../CardItem";
function Card(props) {
    console.log(data);
    return (
            <Row gutter={[10, 20]} style={{}} className="card-wrapper">
                <CardItem/>
            </Row>
    );
}

export default Card;