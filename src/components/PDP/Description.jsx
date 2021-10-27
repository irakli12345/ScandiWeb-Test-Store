import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Description extends Component {
  render() {
    const { description, category, id } = this.props;
    function paragraph() {
      return {
        __html:
          description.length > 200
            ? description.substring(0, 200) + "..."
            : description,
      };
    }
    return (
      <div>
        <div
          className="description"
          dangerouslySetInnerHTML={paragraph()}
        ></div>
        {description.length > 200 ? (
          <Link to={`/${category}/${id}/description`}>
            Read full description
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}
