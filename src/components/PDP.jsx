import React, { Component } from "react";

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
                className={
                  this.state.defaultPictureIndex === index ? "inView" : ""
                }
              ></img>
            ))}
          </div>
          <img
            className="onDisplay"
            src={gallery[this.state.defaultPictureIndex]}
          ></img>
        </div>
        <div className="product-info">
          <h1>{name}</h1>
        </div>
      </div>
    );
  }
}
