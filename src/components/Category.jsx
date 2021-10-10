import React, { Component } from "react";
import { capitalize } from "../helpers";
import Card from "./Card";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="category">
        <h1 className="category-title">{capitalize(this.props.name)}</h1>
        <div className="products-container">
          {this.props.products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              prices={product.prices}
              status={product.inStock}
              headImg={product.gallery[0]}
            ></Card>
          ))}
        </div>
      </div>
    );
  }
}
//<Card key={product.id} name={product.name} prices={product.prices} status={product.inStock} headImg={product.gallery[0]}></Card>
