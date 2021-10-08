import React, { Component } from "react";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {this.props.products.map((product) => (
          <p>{product.name}</p>
        ))}
      </div>
    );
  }
}
