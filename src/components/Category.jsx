import React, { Component } from "react";
import { capitalize } from "../helpers";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{capitalize(this.props.name)}</h1>
        {this.props.products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    );
  }
}
