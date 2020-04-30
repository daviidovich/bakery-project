import React from "react";
import { Link } from "react-router-dom";
import { arrLS } from "./BasketIcon";

export default class BasketMarkup extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <div className="mybasket">
        {items.map((cartItem, i) => {
          return (
            <MarkupCart
              item={cartItem}
              key={cartItem.item._id}
              //updateMarkup={this.props.updateMarkup}
            />
          );
        })}
        <TotalPrice />
        <div className="mybasket-show-more text-center">
          <Link to={"/basket"}>Show All</Link>
        </div>
      </div>
    );
  }
}

export class MarkupCart extends React.Component {
  handleRemove = () => {
    let id = this.props.item.item._id;
    let deleteItem = arrLS.find((elem) => elem.item._id === id);
    let i = arrLS.indexOf(deleteItem);
    arrLS.splice(i, 1);
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    //this.props.updateMarkup();
  };

  render() {
    const item = this.props.item;
    return (
      <div className="mybasket-prod">
        <img src="/img/muffin.png" alt=" " />
        <div>
          <p className="text color-white">{item.item.name}</p>
          <p className="text color-white">
            {/* ${items[i].price} */}
            {item.quantity} x ${item.item.price}
          </p>
        </div>
        <div className="btn-delete" onClick={this.handleRemove}></div>
      </div>
    );
  }
}

function TotalPrice() {
  let totalPrice = 0;
  arrLS.forEach((item) => {
    totalPrice += item.item.price * item.quantity;
  });

  if (arrLS !== 0) {
    return (
      <div className="total-price">
        Total price: <span>${totalPrice}</span>
      </div>
    );
  } else {
    return <div className="total-price">Your basket is empty!</div>;
  }
}
