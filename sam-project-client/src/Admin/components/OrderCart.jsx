import React, { Component } from "react";
import api from "../api/api";

class CompleteOrderBtn extends Component {
  completeOrder = async (e) => {
    e.preventDefault();
    if (window.confirm(`Is order № ${this.props.id.slice(20, 25)} ready?`)) {
      await api.deleteOrderById(this.props.id);
      if (this.props.update) this.props.update();
    }
  };

  render() {
    return (
      <div className="order-cart__btn-ready" onClick={this.completeOrder}></div>
    );
  }
}

export default class OrderCart extends Component {
  render() {
    const order = this.props.order;
    return (
      <div className="order-cart">
        <h2 className="color-brown">Order: № {order._id.slice(20, 25)}</h2>
        <h4 className="color-brown">{order.date}</h4>
        <div className="order-cart-content">
          <div>
            <p className="text">Customer: {order.name}</p>
            <p className="text">Address: {order.address}</p>
            <p className="text">Phone: {order.phone}</p>
            {order.info === "" && <p className="text">Add.information: -</p>}
            {order.info !== "" && (
              <p className="text">Add.information: {order.info}</p>
            )}
            <p className="text">Type of payment: {order.payment}</p>
            <p className="text color-red">Order price: ${order.totalPrice}</p>
          </div>
          <div>
            <p className="text">Products:</p>
            <ol className="text">
              {order.items.map((item, i) => {
                return (
                  <li key={i}>
                    {item.item.name} - {item.quantity};
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="order-cart__btn">
          <CompleteOrderBtn id={order._id} update={this.props.update} />
        </div>
      </div>
    );
  }
}
