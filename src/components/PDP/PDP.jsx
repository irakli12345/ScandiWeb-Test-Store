import React, { PureComponent } from "react";
import LeadingText from "./LeadingText";
import Attributes from "./Attributes";
import Prices from "./Prices";
import PDPGallery from "./PDPGallery";
import Description from "./Description";
export default class PDP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
    const validateAttributeSelection = (options, selected) => {
      const validated = options.every(
        (option) => selected.swatch[option.name] || selected.text[option.name]
      );
      return validated;
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
    return (
      <div className="pdp body">
        <PDPGallery gallery={gallery}></PDPGallery>
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
                ? validateAttributeSelection(
                    attributes,
                    this.state.selectedAttributes
                  )
                  ? () => addToCart(product, this.state.selectedAttributes)
                  : () =>
                      alert("You must select all options before adding to cart")
                : () => alert("Product Out of Stock")
            }
            style={{
              backgroundColor: !available ? "#C0C0C0" : "",
              cursor: available ? "pointer" : "default",
            }}
          >
            add to cart
          </button>
          <Description
            description={description}
            category={category}
            id={id}
          ></Description>
        </div>
      </div>
    );
  }
}
