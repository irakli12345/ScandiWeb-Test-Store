import React, { Component } from "react";
import { formatPrice, filteredPrice } from "../helpers";
export default class Prices extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pricesInCurrencies, currency, label, mini } = this.props;
    const displayPrice = filteredPrice(pricesInCurrencies, currency);
    return (
      <div>
        {label ? <p className="attributeLabel">Price:</p> : ""}
        <p
          className="price"
          style={{
            fontSize: mini ? "16px" : "",
            fontWeight: mini ? "500" : "",
          }}
        >
          {formatPrice(displayPrice[0].currency, displayPrice[0].amount)}
        </p>
      </div>
    );
  }
}
