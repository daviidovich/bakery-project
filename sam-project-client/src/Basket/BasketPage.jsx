import React from "react";
import BasketMarkup from "./BasketMarkup";
import UserDataForm from "./UserDataForm";
import "./BasketPage.scss";
import { arrLS } from "./BasketIcon";
import api from "../API/api";

export default class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      date: "",
      name: "",
      address: "",
      phone: "",
      info: "",
      payment: "",
      totalPrice: 0,
    };
  }

  setCartItems = () => {
    this.setState({ items: arrLS });
    console.log("setCartItems", this.state.items);
  };

  setTotalPrice = () => {
    let totalPrice = 0;
    arrLS.forEach((item) => {
      totalPrice += item.item.price * item.quantity;
    });
    this.setState({
      totalPrice: totalPrice,
    });
  };

  setUserData = (data) => {
    this.setState({
      name: data.name,
      address: data.address,
      phone: data.phone,
      info: data.info,
      payment: data.payment,
    });

    let timer = setTimeout(() => this.creatingOrder(), 1000);
  };

  setDate = () => {
    let date = new Date();
    var options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    this.setState({
      date: date.toLocaleString("ru", options),
    });
  };

  creatingOrder = () => {
    this.setDate();
    this.setCartItems();
    this.setTotalPrice();
    console.log("order", this.state);
    const {
      items,
      date,
      name,
      address,
      phone,
      info,
      payment,
      totalPrice,
    } = this.state;
    const payload = {
      items,
      date,
      name,
      address,
      phone,
      info,
      payment,
      totalPrice,
    };

    api.makeOrder(payload).then((res) => {
      localStorage.clear();
      window.location.reload();
      window.alert(`Order fixed`);
    });
  };

  render() {
    return (
      <div className="cart-page">
        <h1 className="color-brown">My Basket</h1>
        {arrLS.length !== 0 && (
          <div className="cart-page-content">
            <div className="cart-page-userdata cart-item">
              <UserDataForm userData={this.setUserData} />
            </div>
            <BasketMarkup
              model={"fullBasket"}
              setTotalPrice={this.setTotalPrice}
              setCartItems={this.setCartItems}
              updateState={this.props.updateState}
            />
          </div>
        )}
        {arrLS.length === 0 && (
          <div className="cart-page-content">
            <h3 className="color-brown text-center">Your basket is empty!</h3>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
