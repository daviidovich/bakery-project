import React from "react";

import "./BasketCart.scss";
import { arrLS } from "../Section Catalog copy/BasketIcon";

export default class BasketCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let item = this.props.item;
    item.quantity = item.quantity + 1;
    this.setQuantity(item.quantity);
  }

  decrease() {
    let item = this.props.item;
    if (item.quantity >= 1) {
      item.quantity = item.quantity - 1;
    }
    this.setQuantity(item.quantity);
  }

  setQuantity(quantity) {
    this.setState({
      quantity: quantity,
    });
    this.props.setItemQuantity(this.props.item.item._id, quantity);
  }

  handleRemove = () => {
    let id = this.props.item.item._id;
    let deleteItem = arrLS.find((elem) => elem.item._id === id);
    let i = arrLS.indexOf(deleteItem);
    arrLS.splice(i, 1);
    console.log("arr", arrLS);

    this.props.updateMarkup();
  };

  render() {
    let item = this.props.item;

    return (
      <div key={item.item._id} className="cart-item">
        <div className="cart-item-image">
          <img src="/img/pie.png" alt=" " />
        </div>
        <div className="cart-item-info">
          <h3 className="color-brown">{item.item.name}</h3>
          <p className="text">{item.item.section}</p>
          <p className="text">{item.item.description}</p>
          <p className="text">Price: ${item.item.price}</p>
          <p className="total text color-brown">
            Total: ${item.item.price * this.state.quantity}
          </p>
          <div className="quantity flex-center">
            <div className="controls decrease" onClick={this.decrease}>
              -
            </div>
            <div className="quantity-counter flex-center">
              {this.state.quantity}
            </div>
            <div className="controls increase" onClick={this.increase}>
              +
            </div>
          </div>
        </div>
        <div className="btn-delete" onClick={this.handleRemove}></div>
      </div>
    );
  }
}
