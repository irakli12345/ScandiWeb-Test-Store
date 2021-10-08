import React, { Component } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../helpers";
import Logo from "./Logo";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="navigation">
          {this.props.categories.map((category, index) => (
            <Link to={category.name} key={index}>
              {capitalize(category.name) + " "}
            </Link>
          ))}
        </div>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className="actions">
          <p>$</p>{" "}
          <i
            class="fa fa-shopping-cart badge"
            value="5"
            style={{ fontSize: 24 }}
          ></i>
        </div>
      </div>
    );
  }
}
