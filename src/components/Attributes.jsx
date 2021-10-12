import React, { Component } from "react";

export default class Attributes extends Component {
  render() {
    const { list, type, label } = this.props;
    return (
      <div>
        <p>{label}</p>
        {
          list.map((item) => {
            <span className="sizeAttributes" key={item.id}>
              {item.displayValue}
            </span>;
          }) /* the alternative should be color attributes for swatch*/
        }
      </div>
    );
  }
}
