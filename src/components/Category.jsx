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
      <div className="category body">
        <h1 className="category-title">{capitalize(this.props.name)}</h1>
        <div className="products-container">
          {this.props.products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              prices={product.prices}
              available={product.inStock}
              headImg={product.gallery[0]}
              category={product.category}
            ></Card>
          ))}
        </div>
      </div>
    );
  }
}
//<Card key={product.id} name={product.name} prices={product.prices} status={product.inStock} headImg={product.gallery[0]}></Card>
