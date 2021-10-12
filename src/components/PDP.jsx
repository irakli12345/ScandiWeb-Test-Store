import React, { Component } from "react";
import LeadingText from "./LeadingText";
import Attributes from "./Attributes";
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
    } = this.props;
    const handleMouseOver = (itemIndex) => {
      this.setState({ defaultPictureIndex: itemIndex });
    };
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
        <div className="product-info">
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
        </div>
      </div>
    );
  }
}
