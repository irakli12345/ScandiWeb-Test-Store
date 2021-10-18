import React, { Component } from "react";

export default class Minicart extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="minicart">
        <div>
          <p
            style={{
              display: "inline",
              fontWeight: "700",
              border: "2px solid red",
            }}
          >
            My Bag,
          </p>
          <p style={{ display: "inline" }}> {products.length + " products"}</p>
        </div>
      </div>
    );
  }
}
