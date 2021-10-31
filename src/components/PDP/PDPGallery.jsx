import React, { PureComponent } from "react";

export default class PDPGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultPictureIndex: 0,
    };
  }
  render() {
    const { gallery } = this.props;
    const handleMouseOver = (itemIndex) => {
      this.setState({ defaultPictureIndex: itemIndex });
    };
    const smallImageStyles = {
      width: "120px",
      height: "120px",
      objectFit: "cover",
      marginTop: "20px",
      opacity: "0.7",
      cursor: "pointer",
    };
    return (
      <div className="gallery">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          {gallery.map((picture, index) => (
            <img
              src={picture}
              onMouseOver={() => handleMouseOver(index)}
              style={smallImageStyles}
              className="smallGalleryImage"
              key={index + picture}
              alt=""
            ></img>
          ))}
        </div>
        <img
          src={gallery[this.state.defaultPictureIndex]}
          style={{
            objectFit: "cover",
            width: "70%",
            margin: "auto",
            height: "80%",
          }}
          alt=""
        ></img>
      </div>
    );
  }
}
