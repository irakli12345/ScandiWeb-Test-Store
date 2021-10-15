import React, { Component } from "react";
import { formatPrice } from "../helpers";
export default class Prices extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pricesInCurrencies, currency, label } = this.props;
    const filteredPrice = pricesInCurrencies.filter(
      (priceObj) => priceObj.currency.toLowerCase() === currency.toLowerCase()
    );
    return (
      <div>
        {label ? <p className="attributeLabel">Price:</p> : ""}
        <p className="price">
          {formatPrice(filteredPrice[0].currency, filteredPrice[0].amount)}
        </p>
      </div>
    );
  }
}
