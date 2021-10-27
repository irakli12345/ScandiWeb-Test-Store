import React, { Component } from "react";

export default class LeadingText extends Component {
  render() {
    const { bolded, title, tagline, size } = this.props;
    return (
      <div style={{ fontSize: size }}>
        <p className={bolded ? "bold" : ""}>{title}</p>
        <p>{tagline}</p>
      </div>
    );
  }
}
