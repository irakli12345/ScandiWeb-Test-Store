import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Prices from "./Prices";
import Attributes from "./Attributes";
import ProductQuantity from "./ProductQuantity";
import ProductItemGallery from "./ProductItemGallery";
export default class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  /* since the design included minicart, where attributes, prices and product labels were slightly different,
  I decided that these components should accept a prop "mini", which would indicate their relative size.
  */
  render() {
    const { attributes, brand, name, prices, gallery, quantity } =
      this.props.product;
    const { mini, preSelectedAttributes, updateQuantity } = this.props;

    return (
      <div
        className="cartItem"
        style={{
          border: mini ? 0 : "",
          width: mini ? "330px" : "",
        }}
      >
        <div style={{ width: mini ? "120px" : "" }}>
          <LeadingText
            title={brand}
            tagline={name}
            size={mini ? 16 : 30}
            bolded={mini ? false : true}
          ></LeadingText>
          <Prices
            currency={"usd"}
            pricesInCurrencies={prices}
            label={false}
            mini={mini}
          ></Prices>
          {attributes.map((attributeType) => (
            <Attributes
              list={attributeType.items}
              type={attributeType.type}
              label={false}
              mini={mini}
              preSelectedAttributes={
                attributeType.type === "text"
                  ? preSelectedAttributes.text[attributeType.name]
                  : attributeType.type === "swatch"
                  ? preSelectedAttributes.swatch[attributeType.name]
                  : ""
              }
            ></Attributes>
          ))}
        </div>
        <div
          className="right"
          style={{
            height: mini ? "160px" : "200px",
            width: mini ? "135px" : "180px",
          }}
        >
          <ProductQuantity
            mini={mini}
            preSelectedAttributes={preSelectedAttributes}
            updateQuantity={updateQuantity}
            quantity={quantity}
            id={this.props.product.id}
          ></ProductQuantity>
          <ProductItemGallery
            gallery={gallery}
            mini={mini}
          ></ProductItemGallery>
          <div className="count-control"></div>
        </div>
      </div>
    );
  }
}
