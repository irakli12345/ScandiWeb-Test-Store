import React, { Component } from "react";
import OverlayCart from "./Overlaycart";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { key, name, prices, available, headImg } = this.props;

    return (
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
    );
  }
}
