import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { request, gql } from "graphql-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import PDP from "./components/PDP";
import FullCart from "./components/FullCart";
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

  componentDidMount() {
    request("http://localhost:4000/", this.query).then((data) =>
      this.setState({ data: data, loaded: true })
    );
  }
  getFilteredProducts = function (categoryName) {
    return this.state.data.category.products.filter(
      (product) => product["category"] === categoryName
    );
  };
  render() {
    console.log(this.state.data);

    if (this.state.loaded) {
      return (
        <Router>
          <div>
            <Route path="/">
              <Header categories={this.state.data.categories}></Header>
              <Switch>
                {this.state.data.categories.map((category) => (
                  <Route path={"/" + category.name} exact key={category.name}>
                    <Category
                      products={this.getFilteredProducts(category.name)}
                      name={category.name}
                      key={category.name}
                    ></Category>
                  </Route>
                ))}
                <Route path="/" exact>
                  <Category
                    products={this.state.data.category.products}
                    name={this.state.data.category.name + " products"}
                  ></Category>
                </Route>
              </Switch>
            </Route>
            {this.state.data.category.products.map((product) => (
              <Switch>
                <Route path={`/${product.category}/${product.id}`}>
                  <PDP
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    available={product.inStock}
                    gallery={product.gallery}
                    description={product.description}
                    category={product.category}
                    attributes={product.attributes}
                    prices={product.prices}
                    brand={product.brand}
                  ></PDP>
                </Route>
              </Switch>
            ))}
            <Route path="/cart" exact>
              <FullCart></FullCart>
            </Route>
          </div>
        </Router>
      );
    } else {
      return null;
    }
  }
}
