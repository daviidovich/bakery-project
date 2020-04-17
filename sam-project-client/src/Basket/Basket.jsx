import React from "react";
import "./Basket.scss";
import BasketItem from "./BasketItem";
import UserDataForm from "./UserDataForm";
import "./CartPage.scss";
import { arrLS } from "../Section Catalog copy/AddToBasket";
import api from "../API/api";
//import { browserHistory } from "react-router-dom";

var orderArr = [];

export default class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      address: "",
      phone: "",
      info: "",
      payment: "",
      //userData: {},
      totalPrice: 0,
    };

    this.cartItemsComponents = arrLS.map((cartItem) => {
      console.log("cartItem", cartItem);
      return (
        <BasketItem
          setItemQuantity={this.setItemQuantity}
          item={cartItem}
          key={cartItem.item._id}
        />
      );
    });
  }

  componentDidMount = () => {
    this.setTotalPrice();
    this.setCartItems();
  };

  setCartItems = () => {
    this.setState({ items: arrLS });
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

  setItemQuantity = (id, quantity) => {
    let items = this.state.items;
    let item = arrLS.find((elem) => elem.item._id === id);
    item.quantity = quantity;
    this.setTotalPrice();
    // Update state

    localStorage.setItem("itemById", JSON.stringify(arrLS));
    this.setCartItems();
    console.log("updated arrls", arrLS);
  };

  setUserData = (data) => {
    //const userData = data;
    this.setState({
      name: data.name,
      address: data.address,
      phone: data.phone,
      info: data.info,
      payment: data.payment,
    });
    //this.setState({ userData: data });
    let timer = setTimeout(() => this.creatingOrder(), 1000);
  };

  creatingOrder = () => {
    console.log("order", this.state);
    const {
      items,
      name,
      address,
      phone,
      info,
      payment,
      totalPrice,
    } = this.state;
    const payload = { items, name, address, phone, info, payment, totalPrice };

    api.makeOrder(payload).then((res) => {
      window.alert(`Order fixed`);
      // this.setState({
      //   items: items,
      //   userData: userData,
      //   totalPrice: totalPrice,
      // });
    });
  };

  render() {
    return (
      <div className="cart-page">
        <h1 className="color-brown">My Basket</h1>
        <div className="cart-page-content">
          <div className="cart-page-userdata cart-item">
            <UserDataForm userData={this.setUserData} />
          </div>
          <div className="cart-page-list">
            <div className="cart-page-list-products">
              {this.cartItemsComponents}
            </div>
            <h4 className="color-brown">
              Total price: ${this.state.totalPrice}
            </h4>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}
