import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    const { shoe } = this.props;
    return (
      <div className="col-3 mb-5">
        <div className="card text-start bg-warning">
          <img className="card-img-top" src={shoe.image} alt={shoe.name} />
          <div className="card-body">
            <h3 className="card-title">{shoe.name}</h3>
            <h4 className="card-text">{shoe.price}$</h4>
            <div className="d-flex">
              <button
                className="bg-dark text-white btn"
                onClick={() => {
                  this.props.handleAddToCart(shoe);
                }}
              >
                Add to cart
              </button>
              {/* <button className="bg-primary btn text-white">Detail</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
