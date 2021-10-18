import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Prices from "./Prices";
import Attributes from "./Attributes";
export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPictureIndex: 0 };
  }
  render() {
    console.log(this.state.currentPictureIndex);
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
        <div className="right">
          <div
            style={{
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              className="attributeButton noselect"
              style={{ width: "45px" }}
            >
              <p
                style={{
                  fontSize: "32px",
                }}
              >
                +
              </p>
            </span>
            <p
              style={{ fontSize: "24px", fontWeight: 500, textAlign: "center" }}
            >
              5
            </p>
            <span
              className="attributeButton noselect"
              style={{ width: "45px" }}
            >
              {" "}
              <p style={{ fontSize: "24px" }}>—</p>
            </span>
          </div>
          <div className="mini-cart-gallery">
            <img src={gallery[this.state.currentPictureIndex]}></img>
            <span
              className="noselect"
              style={{
                position: "absolute",
                right: "120px",
                top: "80px",
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: "0 15px",
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
                left: "120px",
                top: "80px",
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: "0 15px",
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
