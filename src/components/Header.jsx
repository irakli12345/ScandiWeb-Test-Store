import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./svg icons/Logo";
import Cart from "./svg icons/Cart";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, currenciesExpanded: false };
  }
  render() {
    const { cart, categories, changeMinicartStatus } = this.props;
    return (
      <div className="header body">
        <div className="navigation">
          {categories.map((category, index) => (
            <Link
              to={`/${category.name}`}
              key={index}
              className={`link menuItems ${
                this.state.selectedCategory === index ? "active" : ""
              }`}
              onClick={() => this.setState({ selectedCategory: index })}
            >
              <span>{category.name.toUpperCase() + " "}</span>
            </Link>
          ))}
        </div>
        <Link to="/" onClick={() => this.setState({ selectedCategory: null })}>
          <Logo></Logo>
        </Link>
        <div className="actions">
          <div
            className="group noselect"
            onClick={() =>
              this.setState({
                currenciesExpanded: !this.state.currenciesExpanded,
              })
            }
          >
            {" "}
            <span id="dollar">$</span>
            <span id="arrow">⌄</span>
          </div>
          <span
            className="cart badge noselect"
            style={{ cursor: "pointer" }}
            onClick={changeMinicartStatus}
            value={cart.products.length}
          >
            <Cart></Cart>
          </span>
        </div>
      </div>
    );
  }
}
