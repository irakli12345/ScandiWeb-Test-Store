import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Prices from "./Prices";
import Attributes from "./Attributes";
export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { attributes, brand, name, prices } = this.props.product;
    return (
      <div className="cartItem">
        <div>
          <LeadingText
            title={brand}
            tagline={name}
            size={30}
            bolded={true}
          ></LeadingText>
          <Prices
            currency={"usd"}
            pricesInCurrencies={prices}
            label={false}
          ></Prices>
          {
            attributes.map((attributeType) => (
              <Attributes
                list={attributeType.items}
                type={attributeType.type}
                label={false}
              ></Attributes>
            )) /* by default, one attribute selected from the page should be selected here as well, with the option to change*/
          }
        </div>
        <div>right end</div>
      </div>
    );
  }
}
