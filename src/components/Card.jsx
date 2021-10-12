import React, { Component } from "react";
import OverlayCart from "./Overlaycart";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, name, prices, available, headImg, category } = this.props;

    return (
      <Link className="link regular" to={`/${category}/${id}`}>
        {" "}
        <div className={`card ${!available ? "outOfStock" : ""}`}>
          {" "}
          <span className="imgWithIcon">
            {" "}
            <img src={headImg}></img>
            {available ? (
              <span className="overlayCart">
                <OverlayCart></OverlayCart>
              </span>
            ) : (
              <p className="outOfStockText">Out of stock</p>
            )}
          </span>
          <p className="card-title">{name}</p>
          <p className="card-price">{"$" + prices[0].amount}</p>
        </div>
      </Link>
    );
  }
}
