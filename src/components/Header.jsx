import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import Actions from "./Actions";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null };
  }
  render() {
    const {
      cart,
      categories,
      changeMinicartStatus,
      expandCurrencies,
      currenciesExpanded,
    } = this.props;

    const menuItemsStyle = (index) => {
      return {
        color: "#1d1f22",
        height: "120px",
        display: "flex",
        padding: "0px 15px",
        fontWeight: "600",
        borderBottom:
          this.state.selectedCategory === index ? "2px solid #5ece7b" : "",
      };
    };
    return (
      <div className="header body">
        <div className="navigation">
          {categories.map((category, index) => (
            <Link
              to={`/${category.name}`}
              key={index}
              className="link"
              style={menuItemsStyle(index)}
              onClick={() => this.setState({ selectedCategory: index })}
            >
              <span
                style={{
                  margin: "auto",
                  color: this.state.selectedCategory === index ? "#5ece7b" : "",
                }}
              >
                {category.name.toUpperCase() + " "}
              </span>
            </Link>
          ))}
        </div>
        <Link to="/" onClick={() => this.setState({ selectedCategory: null })}>
          <Logo></Logo>
        </Link>
        <Actions
          cart={cart}
          changeMinicartStatus={changeMinicartStatus}
          expandCurrencies={expandCurrencies}
          currenciesExpanded={currenciesExpanded}
        ></Actions>
      </div>
    );
  }
}
