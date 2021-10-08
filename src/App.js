import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { request, gql } from "graphql-request";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
    };
  }
  query = gql`
    {
      category {
        name
        products {
          name
          inStock
        }
      }
    }
  `;

  async getData() {}
  componentDidMount() {
    request("http://localhost:4000/", this.query).then((data) =>
      this.setState({ data: data, loaded: true })
    );
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.state.data.category.products.map((product) => (
            <p>{product.name}</p>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
