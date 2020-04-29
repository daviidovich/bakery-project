import React from "react";
import { ShopIcon } from "../Another/Icons";
import "./Basket.scss";
import { arrLS } from "./BasketIcon";

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

    this.props.updateMarkup();
  };

  render() {
    return (
      <div className="catalog-list-one__basket text" onClick={this.addToBasket}>
        Add to {ShopIcon}
      </div>
    );
  }
}