import React from "react";
import { arrLS } from "./BasketIcon";
import "../Basket/BasketCart.scss"

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
      console.log("id",id)
      let deleteItem = arrLS.find((elem) => elem.item._id === id);
      let i = arrLS.indexOf(deleteItem);
      arrLS.splice(i, 1);
      localStorage.setItem("itemById", JSON.stringify(arrLS));
      this.props.updateState(arrLS);
    };
  
    render() {
      const item = this.props.item;
      if(this.props.model === "markup"){
         return (
        
        <div className="mybasket-prod">
          <img src="/img/muffin.png" alt=" " />
          <div>
            <p className="text color-white">{item.item.name}</p>
            <p className="text color-white">
              {item.quantity} x ${item.item.price}
            </p>
          </div>
          <div className="btn-delete" onClick={this.handleRemove}></div>
        </div>
      ); 
      } else if (this.props.model === "fullBasket"){
        return (
          <div className="cart-item">
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
      } else return true;
    }
  }