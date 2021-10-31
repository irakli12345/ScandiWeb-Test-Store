import React, { PureComponent } from "react";
import { formatCurrency } from "../../helpers.js";
export default class Currencies extends PureComponent {
  render() {
    const { currencyList, switchCurrency } = this.props;
    const currencyTextStyle = {
      fontSize: "18px",
      fontWeight: 500,
    };
    return (
      <div className="currencies">
        {currencyList.map((currency) => (
          <div
            onClick={() => switchCurrency(currency)}
            style={{ cursor: "pointer" }}
          >
            <p style={currencyTextStyle}>{formatCurrency(currency)}</p>
          </div>
        ))}
      </div>
    );
  }
}
