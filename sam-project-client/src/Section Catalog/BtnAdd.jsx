import React from "react";
import { ShopIcon } from "../Another/Icons";
import "../Basket/Basket.scss";
import { arrLS } from "../Basket/BasketIcon";

export default class BtnAdd extends React.Component {
  addToBasket = () => {
    const item = this.props.item;
    let id = item._id;
    let addedItem = arrLS.find((elem) => elem.item._id === id);

    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    } else {
      arrLS.push({
        item: item,
        quantity: 1,
      });
    }
    alert(`Added ${item.name}`);
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    this.props.stateRise(arrLS);
    console.log("set stateRise at BtnAdd", arrLS)
  };

  render() {
    return (
      <div className="catalog-list-one__basket text" onClick={this.addToBasket}>
        Add {ShopIcon}
      </div>
    );
  }
}
