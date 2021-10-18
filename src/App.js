import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { request, gql } from "graphql-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import PDP from "./components/PDP";
import FullCart from "./components/FullCart";
import Minicart from "./components/Minicart";
import { objectsEqual } from "./helpers";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
      cart: {
        products: [],
        total: 0,
      },
      showMinicart: false,
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
  /* if the user adds one product, but with different options, it's treated as different product and listed separately.
    if he/she adds one product, but with the same selected attributes, the quantity of that product increases
    Before adding a product, I use .every() method to check whether all existing products in an array are different from the new addition.
    If it is, I add a new, separate product. If it's not, I update the quantity of existing product*/
  addToCart(product, attributes) {
    const check = this.state.cart.products.every(
      (item) =>
        !(
          item.id === product.id &&
          objectsEqual(item.selectedAttributes.swatch, attributes.swatch) &&
          objectsEqual(item.selectedAttributes.text, attributes.text)
        )
    );
    if (check) {
      const updatedProductsArr = this.state.cart.products.concat({
        ...product,
        selectedAttributes: attributes,
        quantity: 1,
      });
      this.setState({
        cart: {
          products: updatedProductsArr,
        },
      });
    } else {
      const existingProduct = this.state.cart.products.find(
        (item) =>
          item.id === product.id &&
          objectsEqual(item.selectedAttributes.swatch, attributes.swatch) &&
          objectsEqual(item.selectedAttributes.text, attributes.text)
      );
      const currentIndex = this.state.cart.products.indexOf(existingProduct);
      const count = existingProduct.quantity + 1;
      const productWithUpdatedQuantity = {
        ...existingProduct,
      };
      productWithUpdatedQuantity.quantity = count;
      const updatedArray = [
        ...this.state.cart.products.slice(0, currentIndex),
        productWithUpdatedQuantity,
        ...this.state.cart.products.slice(currentIndex + 1),
      ];
      this.setState({
        cart: {
          products: updatedArray,
        },
      });
    }
  }
  changeMinicartStatus() {
    this.setState({ showMinicart: !this.state.showMinicart });
  }
  render() {
    if (this.state.loaded) {
      return (
        <Router>
          <div>
            <Route path="/">
              <div>
                <Header
                  categories={this.state.data.categories}
                  cart={this.state.cart}
                  changeMinicartStatus={this.changeMinicartStatus.bind(this)}
                ></Header>
              </div>
              <Switch>
                {this.state.data.categories.map((category) => (
                  <Route path={"/" + category.name} exact key={category.name}>
                    <div
                      style={{
                        backgroundColor: this.state.showMinicart
                          ? "rgba(207, 207, 207, 0.3)"
                          : "",
                        minHeight: "80vh",
                      }}
                    >
                      <Category
                        products={this.getFilteredProducts(category.name)}
                        name={category.name}
                        key={category.name}
                      ></Category>
                    </div>
                  </Route>
                ))}

                <Route path="/" exact>
                  <div
                    style={{
                      backgroundColor: this.state.showMinicart
                        ? "rgba(207, 207, 207, 0.3)"
                        : "",
                      minHeight: "80vh",
                    }}
                  >
                    <Category
                      products={this.state.data.category.products}
                      name={this.state.data.category.name + " products"}
                    ></Category>
                  </div>
                </Route>
              </Switch>
            </Route>

            {this.state.data.category.products.map((product) => (
              <Switch>
                <Route path={`/${product.category}/${product.id}`}>
                  <div
                    style={{
                      backgroundColor: this.state.showMinicart
                        ? "rgba(207, 207, 207, 0.3)"
                        : "",
                      minHeight: "80vh",
                    }}
                  >
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
                      addToCart={this.addToCart.bind(this)}
                      product={product}
                    ></PDP>
                  </div>
                </Route>
              </Switch>
            ))}
            <Route path="/cart" exact>
              <div
                style={{
                  backgroundColor: this.state.showMinicart
                    ? "rgba(207, 207, 207, 0.3)"
                    : "",
                  minHeight: "80vh",
                }}
              >
                <FullCart products={this.state.cart.products}></FullCart>
              </div>
            </Route>
            {this.state.showMinicart ? (
              <Minicart products={this.state.cart.products}></Minicart>
            ) : (
              ""
            )}
          </div>
        </Router>
      );
    } else {
      return null;
    }
  }
}
