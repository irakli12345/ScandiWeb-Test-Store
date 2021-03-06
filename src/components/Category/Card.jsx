import React, { PureComponent } from "react";
import OverlayCart from "../../assets/Overlaycart";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers";
export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, name, prices, available, headImg, category, selectedCurrency } =
      this.props;
    const selectCurrency = (currency) => {
      const match = prices.find(
        (price) => price.currency.toLowerCase() === currency
      );
      return match;
    };
    const cardPriceStyles = {
      fontSize: "18px",
      fontWeight: 500,
    };
    const imgStyles = { height: "70%", width: "100%", objectFit: "cover" };
    const amount = selectCurrency(selectedCurrency.toLowerCase()).amount;
    return (
      <div className={`card ${!available ? "outOfStock" : ""}`}>
        <Link
          className="link"
          to={`/${category}/${id}`}
          style={{ color: "black" }}
        >
          {" "}
          <span className="imgWithIcon">
            {" "}
            <img src={headImg} style={imgStyles} alt="head"></img>
            {available ? (
              <span className="overlayCart">
                <OverlayCart></OverlayCart>
              </span>
            ) : (
              <p className="outOfStockText">Out of stock</p>
            )}
          </span>
          <p className="card-title">{name}</p>
          <p style={cardPriceStyles}>{formatPrice(selectedCurrency, amount)}</p>
        </Link>
      </div>
    );
  }
}
