import React, { Component } from "react";

export default class Attributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      selectedAttribute: "",
    };
  }

  render() {
    const { list, type, label, handler } = this.props;
    const handleClick = (item) => {
      if (handler) {
        handler({ [label]: item.value }, type, label);
      }
      this.setState({ selectedValue: item.value });
    };
    return (
      <div>
        {label ? <p className="attributeLabel">{label + ":"}</p> : ""}
        <div className="attributes">
          {list.map((item) => (
            <span
              onClick={() => handleClick(item)}
              className={`attributeButton ${
                this.state.selectedValue === item.value
                  ? "selectedAttribute"
                  : ""
              }`}
              style={{
                backgroundColor: type === "swatch" ? item.value : "",
                border: type === "swatch" ? item.value : "",
                opacity:
                  type === "swatch"
                    ? this.state.selectedValue === item.value
                      ? "1"
                      : "0.5"
                    : "",
              }}
            >
              <p
                style={{
                  display: type === "swatch" ? "none" : "",
                }}
              >
                {item.value}
              </p>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
