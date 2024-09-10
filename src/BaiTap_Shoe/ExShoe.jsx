import React, { Component } from "react";
import { dataShoe } from "./dataShoe";
import ListShoe from "./ListShoe";
import Cart from "./Cart";

export default class ExShoe extends Component {
  state = {
    shoes: dataShoe,
    cart: [],
  };

  handleAddToCart = (shoe) => {
    // let newShoe = { ...shoe, total: 1 };
    // let newCart = [...this.state.cart, newShoe];
    // newCart.push(shoe);
    let clone = [...this.state.cart];
    let index = clone.findIndex((item) => item.id === shoe.id);
    // this.setState({
    //   cart: newCart,
    // });
    if (index !== -1) {
      clone[index].total++;
    } else {
      clone.push({ ...shoe, total: 1 });
    }

    this.setState({
      cart: clone,
    });
  };

  handleDeleteItemFromCart = (idShoe) => {
    const { cart } = this.state;
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };

  handleChangeQuantity = (id, action) => {
    const { cart } = this.state;
    let newCart = [...cart];
    let index = newCart.findIndex((item) => item.id === id);

    if (action) {
      newCart[index].total++;
    } else {
      if (newCart[index].total > 1) {
        newCart[index].total--;
      }
    }
    this.setState({
      cart: newCart,
    });
  };

  render() {
    let { cart } = this.state;
    return (
      <div className="container-fluid">
        <div className="row align-items-start">
          <ListShoe list={dataShoe} handleAddToCart={this.handleAddToCart} />
          <Cart
            dataCart={cart}
            handleDeleteItemFromCart={this.handleDeleteItemFromCart}
            handleChangeQuantity={this.handleChangeQuantity}
          />
        </div>
      </div>
    );
  }
}
