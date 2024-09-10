import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { list, handleAddToCart } = this.props;
    return (
      <div className="row col-6">
        {list.map((shoe, index) => {
          return (
            <ItemShoe
              key={index}
              shoe={shoe}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
