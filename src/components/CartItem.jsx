import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Prices from "./Prices";
import Attributes from "./Attributes";
export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPictureIndex: 0 };
  }
  /* since the design included minicart, where attributes, prices and product labels were slightly different,
  I decided that these components should accept a prop "mini", which would indicate their relative size.
  */
  render() {
    const handleClick = (action) => {
      if (
        action === "increment" &&
        this.state.currentPictureIndex < gallery.length - 1
      ) {
        this.setState({
          currentPictureIndex: this.state.currentPictureIndex + 1,
        });
      } else if (action === "decrement" && this.state.currentPictureIndex > 0) {
        this.setState({
          currentPictureIndex: this.state.currentPictureIndex - 1,
        });
      } else {
        return null;
      }
    };
    const { attributes, brand, name, prices, gallery } = this.props.product;
    const { mini, preSelectedAttributes } = this.props;
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
            height: mini ? "160px" : "",
            width: mini ? "135px" : "",
          }}
        >
          <div
            style={{
              marginRight: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              className="attributeButton noselect"
              style={{
                width: mini ? "24px" : "45px",
                height: mini ? "24px" : "",
              }}
            >
              <p
                style={{
                  fontSize: mini ? "20px" : "32px",
                }}
              >
                +
              </p>
            </span>
            <p
              style={{
                fontSize: mini ? "16px" : "24px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              5
            </p>
            <span
              className="attributeButton noselect"
              style={{
                width: mini ? "24px" : "45px",
                height: mini ? "24px" : "",
              }}
            >
              {" "}
              <p style={{ fontSize: mini ? "14px" : "24px" }}>—</p>
            </span>
          </div>
          <div className="mini-cart-gallery">
            <img src={gallery[this.state.currentPictureIndex]}></img>
            <span
              className="noselect"
              style={{
                position: "absolute",
                right: mini ? "90px" : "120px",
                top: mini ? "55px" : "80px",
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: mini ? "0 8px" : "0 15px",
                borderRadius: "5%",
              }}
              onClick={() => handleClick("decrement")}
            >
              {" "}
              <p>{`<`}</p>
            </span>
            <span
              className="noselect"
              style={{
                position: "absolute",
                left: mini ? "90px" : "120px",
                top: mini ? "55px" : "80px",
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: mini ? "0 8px" : "0 15px",
                borderRadius: "5%",
              }}
              onClick={() => handleClick("increment")}
            >
              <p>{`>`}</p>{" "}
            </span>
          </div>

          <div className="count-control"></div>
        </div>
      </div>
    );
  }
}
