import React, { Component } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { formatPrice, findIndex } from "../helpers";

export default class Minicart extends Component {
  render() {
    const { updateQuantity, selectedCurrency } = this.props;
    const { products, total } = this.props.cart;
    return (
      <div className="minicart">
        <div>
          <p
            style={{
              display: "inline",
              fontWeight: "700",
            }}
          >
            My Bag,
          </p>
          <p style={{ display: "inline" }}> {products.length + " products"}</p>
        </div>
        <div style={{ minHeight: "300px" }}>
          {products.map((product) => (
            <CartItem
              product={product}
              mini={true}
              preSelectedAttributes={product.selectedAttributes}
              updateQuantity={(id, action, preSelectedAttributes) =>
                updateQuantity(id, action, preSelectedAttributes)
              }
              selectedCurrency={selectedCurrency}
            ></CartItem>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: 16 }}>
            Total
          </p>
          <p style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: 16 }}>
            {formatPrice(selectedCurrency, Math.round(total))}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <span
              style={{
                padding: "16px 32px",
                width: "140px",
                height: "43px",
                textTransform: "uppercase",
                border: "1px solid #1D1F22",
                fontWeight: 600,
                boxSizing: "border-box",
                fontSize: "14px",
              }}
            >
              view bag
            </span>
          </Link>
          <span
            style={{
              padding: "16px 32px",
              textTransform: "uppercase",
              backgroundColor: "#5ECE7B",
              fontWeight: 600,
              color: "white",
              fontSize: "14px",
            }}
          >
            checkout
          </span>
        </div>
      </div>
    );
  }
}
