import logo from "./logo.svg";
import "./App.css";
import React, { PureComponent } from "react";
import { request, gql } from "graphql-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import PDP from "./components/PDP/PDP";
import FullCart from "./components/Cart/FullCart";
import Minicart from "./components/Overlays/Minicart";
import Currencies from "./components/Overlays/Currencies";
import {
  objectsEqual,
  identifyUniqueProduct,
  findExistingProduct,
  findIndex,
} from "./helpers";
export default class App extends PureComponent {
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
      currenciesExpanded: false,
      selectedCurrency: "USD",
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
      (product) =>
        product["category"].toLowerCase() === categoryName.toLowerCase()
    );
  };
  /* if the user adds one product, but with different options, it's treated as different product and listed separately.
    if he/she adds one product, but with the same selected attributes, the quantity of that product increases
    Before adding a product, I use .every() method to check whether all existing products in an array are different from the new addition.
    If it is, I add a new, separate product. If it's not, I update the quantity of existing product*/
  addToCart(product, attributes) {
    if (identifyUniqueProduct(product, attributes, this.state.cart.products)) {
      const updatedProductsArr = this.state.cart.products.concat({
        ...product,
        selectedAttributes: attributes,
        quantity: 1,
      });
      this.setState({
        cart: {
          products: updatedProductsArr,
          total: this.calculateTotal(updatedProductsArr),
        },
      });
    } else {
      const existingProduct = findExistingProduct(
        product,
        attributes,
        this.state.cart.products
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
          total: this.calculateTotal(updatedArray),
        },
      });
    }
  }
  calculateTotal = (updatedArr) => {
    let total = 0;
    for (let i = 0; i < updatedArr.length; i++) {
      total +=
        updatedArr[i].prices[
          findIndex(this.state.selectedCurrency, updatedArr[i].prices)
        ].amount * updatedArr[i].quantity;
    }
    return total;
  };
  updateQuantity = (id, action, selectedAttributes) => {
    const product = this.state.cart.products.find(
      (product) =>
        product.id === id &&
        objectsEqual(product.selectedAttributes, selectedAttributes)
    );
    const currentIndex = this.state.cart.products.indexOf(product);
    if (action === "increase") {
      product.quantity += 1;
    } else if (action === "decrease" && product.quantity > 1) {
      product.quantity -= 1;
    }
    const updatedArray = [
      ...this.state.cart.products.slice(0, currentIndex),
      product,
      ...this.state.cart.products.slice(currentIndex + 1),
    ];
    this.setState({
      cart: {
        products: updatedArray,
        total: this.calculateTotal(updatedArray),
      },
    });
  };
  changeMinicartStatus() {
    this.setState({
      showMinicart: !this.state.showMinicart,
      currenciesExpanded: false,
    });
  }
  expandCurrencies() {
    this.setState({
      currenciesExpanded: !this.state.currenciesExpanded,
      showMinicart: false,
    });
  }
  switchCurrency(currency) {
    this.setState({ selectedCurrency: currency });
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
                  expandCurrencies={this.expandCurrencies.bind(this)}
                  currenciesExpanded={this.state.currenciesExpanded}
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
                        selectedCurrency={this.state.selectedCurrency}
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
                      selectedCurrency={this.state.selectedCurrency}
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
                      selectedCurrency={this.state.selectedCurrency}
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
                <FullCart
                  products={this.state.cart.products}
                  updateQuantity={this.updateQuantity}
                  selectedCurrency={this.state.selectedCurrency}
                ></FullCart>
              </div>
            </Route>
            {this.state.showMinicart ? (
              <Minicart
                cart={this.state.cart}
                updateQuantity={this.updateQuantity}
                selectedCurrency={this.state.selectedCurrency}
              ></Minicart>
            ) : (
              ""
            )}
            {this.state.currenciesExpanded ? (
              <Currencies
                currencyList={this.state.data.currencies}
                switchCurrency={this.switchCurrency.bind(this)}
              ></Currencies>
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
