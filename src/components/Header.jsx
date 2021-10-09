import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null };
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
          <p>$</p>{" "}
          <i
            className="fa fa-shopping-cart badge"
            value="5"
            style={{ fontSize: 24 }}
          ></i>
        </div>
      </div>
    );
  }
}
