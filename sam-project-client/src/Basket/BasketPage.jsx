import React from "react";
import BasketCart from "./BasketCart";
import UserDataForm from "./UserDataForm";
import "./BasketPage.scss";
import { arrLS } from "../Section Catalog/BasketIcon";
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
    // this.cartItemsComponents = arrLS.map((cartItem) => {
    //   console.log("cartItem", cartItem);
    //   return (
    //     <BasketItem
    //       updateLocalStorage={this.updateLocalStorage}
    //       setCartItems={this.setCartItems}
    //       setItemQuantity={this.setItemQuantity}
    //       item={cartItem}
    //       key={cartItem.item._id}
    //     />
    //   );
    // });
  }

  componentDidMount = () => {
    this.setTotalPrice();
    this.setCartItems();
  };

  updateMarkup = () => {
    this.setLocalStorage();
    this.setCartItems();
    this.setTotalPrice();
  };

  setLocalStorage = () => {
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    console.log("updated LocalStorage", arrLS);
  };

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

  setItemQuantity = (id, quantity) => {
    let item = arrLS.find((elem) => elem.item._id === id);
    item.quantity = quantity;
    this.updateMarkup();
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
      window.alert(`Order fixed`);
      // this.setState({
      //   items: items,
      //   userData: userData,
      //   totalPrice: totalPrice,
      // });
      localStorage.clear();
      this.updateMarkup();
    });
  };

  render() {
    const items = this.state.items;

    return (
      <div className="cart-page">
        <h1 className="color-brown">My Basket</h1>
        {arrLS !== 0 && (
          <div className="cart-page-content">
            <div className="cart-page-userdata cart-item">
              <UserDataForm userData={this.setUserData} />
            </div>
            <div className="cart-page-list">
              <div className="cart-page-list-products">
                {items.map((cartItem) => {
                  return (
                    <BasketCart
                      updateMarkup={this.updateMarkup}
                      setItemQuantity={this.setItemQuantity}
                      item={cartItem}
                      key={cartItem.item._id}
                    />
                  );
                })}
              </div>
              <h3 className="color-brown">
                Total price: ${this.state.totalPrice}
              </h3>
            </div>
          </div>
        )}
        {arrLS === 0 && (
          <div className="cart-page-content">
            <h3 className="color-brown text-center">Your basket is empty!</h3>
          </div>
        )}
        {this.props.children}
        {/* <div>
          <Test />
        </div> */}
      </div>
    );
  }
}

// var testarr = JSON.parse(localStorage.getItem("test")) || [];

// export class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arr: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({ arr: testarr });
//   }

//   update = (newarr) => {
//     this.setState({ arr: newarr });
//   };

//   render() {
//     return (
//       <div style={({ height: "100px" }, { border: "2px solid red" })}>
//         <h1>BasketIcon: {this.state.arr}</h1>
//         <Test1 arr={this.state.arr} />
//         <Test2 update={this.update} />
//       </div>
//     );
//   }
// }

// export class Test1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arr: [],
//     };
//   }
//   render() {
//     const arr = this.props.arr;
//     return (
//       <div style={({ heigth: "50px" }, { border: "2px solid blue" })}>
//         <h1>Markup: {arr}</h1>
//       </div>
//     );
//   }
// }

// export class Test2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arr: [],
//     };
//   }

//   click = () => {
//     testarr.push(4, 4, 4);
//     localStorage.setItem("test", JSON.stringify(testarr));
//     this.setState({ arr: testarr });
//     this.props.update(testarr);
//   };

//   render() {
//     const arr = this.props.arr;
//     return (
//       <div
//         style={({ height: "50px" }, { border: "2px solid green" })}
//         onClick={this.click}
//       >
//         <h1>BtnAdd: {this.state.arr}</h1>
//       </div>
//     );
//   }
// }
