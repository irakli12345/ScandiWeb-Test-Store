import React, { Component } from "react";
import OverlayCart from "./Overlaycart";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { key, name, prices, status, headImg } = this.props;

    return (
      <div className="card">
        {" "}
        <img src={headImg}></img>
        <p className="card-title">{name}</p>
        <p className="card-price">{"$" + prices[0].amount}</p>
      </div>
    );
  }
}
