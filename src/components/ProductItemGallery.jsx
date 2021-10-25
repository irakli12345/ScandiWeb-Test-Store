import React, { Component } from "react";

export default class ProductItemGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPictureIndex: 0 };
  }
  render() {
    const { gallery, mini } = this.props;
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
    const leftArrowStyle = {
      position: "absolute",
      right: mini ? "90px" : "120px",
      top: mini ? "55px" : "80px",
      backgroundColor: "rgba(255,255,255,0.5)",
      padding: mini ? "0 8px" : "0 15px",
      borderRadius: "5%",
    };
    const rightArrowStyle = {
      position: "absolute",
      left: mini ? "90px" : "120px",
      top: mini ? "55px" : "80px",
      backgroundColor: "rgba(255,255,255,0.5)",
      padding: mini ? "0 8px" : "0 15px",
      borderRadius: "5%",
    };
    return (
      <div className="mini-cart-gallery">
        <img
          src={gallery[this.state.currentPictureIndex]}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
        <span
          className="noselect"
          style={leftArrowStyle}
          onClick={() => handleClick("decrement")}
        >
          {" "}
          <p>{`<`}</p>
        </span>
        <span
          className="noselect"
          style={rightArrowStyle}
          onClick={() => handleClick("increment")}
        >
          <p>{`>`}</p>{" "}
        </span>
      </div>
    );
  }
}
