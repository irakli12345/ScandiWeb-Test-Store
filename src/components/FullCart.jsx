import React, { Component } from "react";
import CartItem from "./CartItem";
export default class FullCart extends Component {
  render() {
    const { products, updateQuantity } = this.props;
    return (
      <div className="fullCart">
        <h2
          style={{
            fontSize: "32",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Cart
        </h2>
        {products.map((product) => (
          <CartItem
            product={product}
            preSelectedAttributes={product.selectedAttributes}
            updateQuantity={(id, action, preSelectedAttributes) =>
              updateQuantity(id, action, preSelectedAttributes)
            }
          ></CartItem>
        ))}
      </div>
    );
  }
}
