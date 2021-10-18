import React, { Component } from "react";

import CartItem from "./CartItem";
export default class FullCart extends Component {
  render() {
    const cartArray = [
      {
        attributes: [
          {
            name: "Size",
            type: "text",
            items: [
              { value: "40", id: "40", displayValue: "40" },
              { value: "41", id: "41", displayValue: "41" },
              { value: "42", id: "42", displayValue: "42" },
              { value: "43", id: "43", displayValue: "43" },
            ],
          },
        ],
        brand: "Nike x Stussy",
        category: "clothes",
        description: "<p>Great sneakers for everyday use!</p>",
        gallery: [
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
          "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
        ],
        id: "huarache-x-stussy-le",
        inStock: true,
        name: "Nike Air Huarache Le",
        prices: [
          { currency: "USD", amount: 144.69 },
          { currency: "GBP", amount: 104 },
          { currency: "AUD", amount: 186.65 },
          { currency: "JPY", amount: 15625.24 },
          { currency: "RUB", amount: 10941.76 },
        ],
      },
    ];
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
        {cartArray.map((product) => (
          <CartItem product={product}></CartItem>
        ))}
      </div>
    );
  }
}
