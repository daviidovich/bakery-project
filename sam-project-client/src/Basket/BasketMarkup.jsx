import React from "react";
import { Link } from "react-router-dom";
import { arrLS } from "./BasketIcon";
import BasketCart from "./MarkupCart";

class TotalPrice extends React.Component {
  render() {
    let totalPrice = 0;
    arrLS.forEach((item) => {
      totalPrice += item.item.price * item.quantity;
    });

    if (arrLS.length === 0) {
      return <div className="total-price">Your basket is empty!</div>;
    } else {
      if (this.props.model === "fullBasket")
        return (
          <div className="total-price">
            <h3>Total price: </h3>
            <h3>${totalPrice}</h3>
          </div>
        );
      if (this.props.model === "markup") {
        return (
          <div className="total-price">
            Total price: <span>${totalPrice}</span>
          </div>
        );
      }
    }
  }
}

export default class BasketMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = () => {
    this.setState({ items: arrLS });
  };

  // updateMarkup = () => {
  //   // this.setLocalStorage();
  //   // this.setCartItems();
  //   // //this.setTotalPrice();
  //   this.props.updateState()
  // };

  // setLocalStorage = () => {
  //   localStorage.setItem("itemById", JSON.stringify(arrLS));
  //   console.log("updated LocalStorage", arrLS);
  // };

  // setCartItems = () => {
  //   this.setState({ items: arrLS });
  //   console.log("setCartItems", this.state.items);
  // };

  setItemQuantity = (id, quantity) => {
    let item = arrLS.find((elem) => elem.item._id === id);
    item.quantity = quantity;
    this.props.updateState(arrLS);
  };

  render() {
    const items = this.state.items;
    if (this.props.model === "markup") {
      return (
        <div className="mybasket">
          {items.map((cartItem, i) => {
            return (
              <BasketCart
                model={"markup"}
                updateState={this.props.updateState}
                item={cartItem}
                key={cartItem.item._id}
              />
            );
          })}
          <TotalPrice model={"markup"} />
          <div className="mybasket-show-more text-center">
            <Link to={"/basket"}>Show All</Link>
          </div>
        </div>
      );
    } else if (this.props.model === "fullBasket") {
      return (
        <div className="cart-page-list">
          <div className="cart-page-list-products">
            {items.map((cartItem) => {
              return (
                <BasketCart
                  model={"fullBasket"}
                  updateState={this.props.updateState}
                  setItemQuantity={this.setItemQuantity}
                  item={cartItem}
                  key={cartItem.item._id}
                />
              );
            })}
          </div>
          {/* <h3 className="color-brown">
        Total price: ${this.state.totalPrice}
      </h3> */}
          <TotalPrice model={"fullBasket"} />
        </div>
      );
    }
  }
}
