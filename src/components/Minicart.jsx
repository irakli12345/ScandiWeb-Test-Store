import React, { Component } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default class Minicart extends Component {
  render() {
    const { products, updateQuantity } = this.props;
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
        <div style={{ marginTop: "10px" }}>
          {products.map((product) => (
            <CartItem
              product={product}
              mini={true}
              preSelectedAttributes={product.selectedAttributes}
              updateQuantity={(id, action, preSelectedAttributes) =>
                updateQuantity(id, action, preSelectedAttributes)
              }
            ></CartItem>
          ))}
        </div>
        <Link to="/cart">view full cart</Link>
      </div>
    );
  }
}
