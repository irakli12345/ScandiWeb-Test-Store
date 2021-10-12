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
      key,
      name,
      available,
      gallery,
      description,
      category,
      attributes,
      prices,
      brand,
    } = this.props;
    return (
      <div className="pdp body">
        <div className="gallery">
          <div className="mini-items">
            {" "}
            {gallery.map((picture) => (
              <img src={picture}></img>
            ))}
          </div>
          <img className="onDisplay"></img>
        </div>
        <h1>{name}</h1>
      </div>
    );
  }
}
