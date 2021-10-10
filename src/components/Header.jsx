import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Cart from "./Cart";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, currenciesExpanded: false };
  }
  render() {
    return (
      <div className="header">
        <div className="navigation">
          {this.props.categories.map((category, index) => (
            <Link
              to={category.name}
              key={index}
              className={`menuItems ${
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
            className="group"
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
            className="cart badge"
            onClick={() => console.log("boo")}
            value={5}
          >
            <Cart></Cart>
          </span>
        </div>
      </div>
    );
  }
}
