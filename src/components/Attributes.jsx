import React, { Component } from "react";

export default class Attributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      selectedAttribute: "",
    };
  }
  /* since the design included minicart, where attributes, prices and product labels were slightly different,
  I decided that these components should accept a prop "mini", which would indicate their relative size.
  */
  render() {
    const { list, type, label, handler, mini, preSelectedAttributes } =
      this.props;
    const handleClick = (item) => {
      if (handler) {
        handler({ [label]: item.value }, type, label);
      }
      this.setState({ selectedValue: item.value });
    };

    return (
      <div>
        {label ? <p className="attributeLabel">{label + ":"}</p> : ""}
        <div
          className="attributes"
          style={{
            justifyContent: mini ? "flex-start" : "",
            marginLeft: mini ? "-10px" : "",
            marginTop: mini ? "5px" : "",
          }}
        >
          {list.map((item) => (
            <span
              onClick={() => handleClick(item)}
              className={`attributeButton ${
                this.state.selectedValue === item.value ||
                preSelectedAttributes === item.value
                  ? "selectedAttribute"
                  : ""
              }`}
              style={{
                backgroundColor: type === "swatch" ? item.value : "",
                border: type === "swatch" ? item.value : "",
                opacity:
                  type === "swatch"
                    ? this.state.selectedValue === item.value ||
                      preSelectedAttributes === item.value
                      ? "1"
                      : "0.5"
                    : "",
                width:
                  mini && type === "swatch"
                    ? "24px"
                    : mini && item.value.length < 3
                    ? "24px"
                    : "",
                height: mini ? "24px" : "",
                marginLeft: mini ? "10px" : "",
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
