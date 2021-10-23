import React, { Component } from "react";
import Cart from "./svg icons/Cart";

export default class Actions extends Component {
  render() {
    const { cart, changeMinicartStatus, expandCurrencies, currenciesExpanded } =
      this.props;
    const arrowStyles = {
      fontSize: "16px",
      position: "relative",
      bottom: "4px",
      left: "4px",
      margin: "auto",
    };
    const dollarSignStyles = {
      fontSize: "18px",
      fontWeight: 500,
      margin: "auto",
    };
    return (
      <div className="actions">
        <div className="group noselect" onClick={() => expandCurrencies()}>
          {" "}
          <span style={dollarSignStyles}>$</span>
          <span style={arrowStyles}>
            {currenciesExpanded ? (
              <span style={{ ...arrowStyles, top: "10px", left: "0px" }}>
                ⌃
              </span>
            ) : (
              <span>⌄</span>
            )}
          </span>
        </div>
        <span
          className="cart badge noselect"
          style={{ cursor: "pointer" }}
          onClick={changeMinicartStatus}
          value={cart.products.length}
        >
          <Cart></Cart>
        </span>
      </div>
    );
  }
}
