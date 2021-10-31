import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
export default class Description extends PureComponent {
  render() {
    const { description, category, id } = this.props;
    return (
      <div>
        <div className="description">
          {parse(description.substring(0, 200))}
        </div>
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
