import React, { Component } from "react";

export default class ProductQuantity extends Component {
  render() {
    const { mini, preSelectedAttributes, updateQuantity, quantity, id } =
      this.props;
    return (
      <div
        style={{
          marginRight: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span
          className="attributeButton noselect"
          style={{
            width: mini ? "24px" : "45px",
            height: mini ? "24px" : "",
          }}
          onClick={() => updateQuantity(id, "increase", preSelectedAttributes)}
        >
          <p
            style={{
              fontSize: mini ? "20px" : "32px",
            }}
          >
            +
          </p>
        </span>
        <p
          style={{
            fontSize: mini ? "16px" : "24px",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {quantity}
        </p>
        <span
          className="attributeButton noselect"
          style={{
            width: mini ? "24px" : "45px",
            height: mini ? "24px" : "",
          }}
          onClick={() => updateQuantity(id, "decrease", preSelectedAttributes)}
        >
          {" "}
          <p style={{ fontSize: mini ? "14px" : "24px" }}>—</p>
        </span>
      </div>
    );
  }
}
