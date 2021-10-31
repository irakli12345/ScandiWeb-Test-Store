import React, { PureComponent } from "react";
import { capitalize } from "../../helpers";
import Card from "./Card";
export default class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selectedCurrency } = this.props;
    const categoryStyles = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      width: "100%",
      justifyContent: "space-between",
    };
    return (
      <div className="category body">
        <h1 className="category-title">{capitalize(this.props.name)}</h1>
        <div style={categoryStyles}>
          {this.props.products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              prices={product.prices}
              available={product.inStock}
              headImg={product.gallery[0]}
              category={product.category}
              selectedCurrency={selectedCurrency}
            ></Card>
          ))}
        </div>
      </div>
    );
  }
}
//<Card key={product.id} name={product.name} prices={product.prices} status={product.inStock} headImg={product.gallery[0]}></Card>
