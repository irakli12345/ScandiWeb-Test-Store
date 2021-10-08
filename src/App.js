import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { request, gql } from "graphql-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";

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
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            name
            type
            items {
              value
              id
              displayValue
            }
          }
          prices {
            currency
            amount
          }
          brand
        }
      }
      categories {
        name
        products {
          id
        }
      }
      currencies
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
        <Router>
          <div>
            <Route path="/">
              <Header categories={this.state.data.categories}></Header>
              <Switch>
                {this.state.data.categories.map((category) => (
                  <Route path={"/" + category.name} key={category.name}>
                    <Category
                      products={this.state.data.category.products.filter(
                        (product) => product["category"] === category.name
                      )}
                      name={category.name}
                      key={category.name}
                    ></Category>
                  </Route>
                ))}
              </Switch>
            </Route>
          </div>
        </Router>
      );
    } else {
      return null;
    }
  }
}
