import React, { Component } from "react";

export default class Cart extends Component {
  renderTable = () => {
    const { dataCart, handleDeleteItemFromCart, handleChangeQuantity } =
      this.props;
    return dataCart.map((item, index) => {
      // thay vì (item, index), vì dataCart bản chất là arr Object có thể viết ({name}, index)
      return (
        // khi xuống sẽ không cần phải item.something mà chỉ cần viết something
        <tr key={index}>
          <td style={{ width: "30%" }}>{item.name}</td>
          <td>
            <img src={item.image} style={{ width: "100%" }} alt="img" />
          </td>
          <td style={{ width: "20%" }}>
            <button
              className="btn btn-success"
              onClick={() => handleChangeQuantity(item.id, true)}
            >
              +
            </button>
            <span className="mx-2">{item.total}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleChangeQuantity(item.id, false)}
            >
              -
            </button>
          </td>
          <td>{item.price}$</td>
          <td style={{ width: "10%" }}>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteItemFromCart(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th style={{ width: "15%" }}>Image</th>
              <th>Total</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>

          {this.props.dataCart.length !== 0 && (
            <tfoot>
              <td colSpan={3}></td>
              <td>
                <strong>Total amount: </strong>
              </td>
              <td>
                {this.props.dataCart.reduce((totalAmount, item, index) => {
                  return (totalAmount += item.total * item.price);
                }, 0)}
                $
              </td>
            </tfoot>
          )}
        </table>
        {this.props.dataCart.length === 0 && (
          <p className="text-center">No item to display</p>
        )}
      </div>
    );
  }
}
