import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
export default class Description extends PureComponent {
  render() {
    const { description, category, id } = this.props;
    return (
      <div style={{ overflowY: description.length > 200 ? "scroll" : "" }}>
        <div className="description">{parse(description)}</div>
      </div>
    );
  }
}
