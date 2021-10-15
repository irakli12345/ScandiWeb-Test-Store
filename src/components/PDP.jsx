import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Attributes from "./Attributes";
import Prices from "./Prices";
import { Link } from "react-router-dom";
export default class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPictureIndex: 0,
    };
  }
  render() {
    const {
      name,
      available,
      gallery,
      description,
      category,
      attributes,
      prices,
      brand,
      id,
    } = this.props;
    const handleMouseOver = (itemIndex) => {
      this.setState({ defaultPictureIndex: itemIndex });
    };
    function paragraph() {
      return {
        __html:
          description.length > 200
            ? description.substring(0, 200) + "..."
            : description,
      };
    }
    return (
      <div className="pdp body">
        <div className="gallery">
          <div className="mini-items">
            {" "}
            {gallery.map((picture, index) => (
              <img
                src={picture}
                onMouseOver={() => handleMouseOver(index)}
              ></img>
            ))}
          </div>
          <img
            className="onDisplay"
            src={gallery[this.state.defaultPictureIndex]}
          ></img>
        </div>
        <div className="product-details">
          <LeadingText
            title={brand}
            tagline={name}
            bolded={true}
            size={30}
          ></LeadingText>
          {attributes.map((attributeType) => (
            <Attributes
              list={attributeType.items}
              type={attributeType.type}
              label={attributeType.name}
            ></Attributes>
          ))}
          <Prices
            pricesInCurrencies={prices}
            currency={"usd"}
            label={true}
          ></Prices>
          <button className="addToCart">add to cart</button>
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
      </div>
    );
  }
}
