import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <a href="/women">Women </a>
        <a href="/men">Men </a>
        <a href="/kids">Kids </a>
      </div>
    );
  }
}
