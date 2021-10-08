import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <a href="/clothes">Clothes </a>
        <a href="/tech">Tech </a>
      </div>
    );
  }
}
