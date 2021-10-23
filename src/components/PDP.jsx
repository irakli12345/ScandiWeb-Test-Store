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
      selectedAttributes: {
        id: null,
        text: {},
        swatch: {},
      },
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
      addToCart,
      product,
      selectedCurrency,
    } = this.props;
    const handleMouseOver = (itemIndex) => {
      this.setState({ defaultPictureIndex: itemIndex });
    };
    const handleAttributeChange = (object, type, label) => {
      if (type == "text") {
        this.setState({
          selectedAttributes: {
            id: id,
            text: { ...this.state.selectedAttributes.text, ...object },
            swatch: this.state.selectedAttributes.swatch,
          },
        });
      } else if ((type = "swatch")) {
        this.setState({
          selectedAttributes: {
            id: id,
            text: this.state.selectedAttributes.text,
            swatch: { ...this.state.selectedAttributes.swatch, ...object },
          },
        });
      }
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
              handler={handleAttributeChange}
            ></Attributes>
          ))}
          <Prices
            pricesInCurrencies={prices}
            currency={selectedCurrency}
            label={true}
          ></Prices>
          <button
            className="addToCart"
            onClick={
              available
                ? () => addToCart(product, this.state.selectedAttributes)
                : ""
            }
            style={{
              backgroundColor: !available ? "#C0C0C0" : "",
              cursor: available ? "pointer" : "default",
            }}
          >
            add to cart
          </button>
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
