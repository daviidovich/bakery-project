import React from "react";

import BasketIcon from "../Section Catalog copy/BasketIcon";
import { getNewPrice } from "../Another/CountPrice";

export default class CatalogCart extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <div className="catalog-list-content">
        {items.map((item, i) => {
          let priceWithDiscount = getNewPrice(item.price, item.discount);
          if (item.discount === 0) {
            return (
              <div key={i} className="catalog-list-one flex-center">
                <div className="catalog-list-one__hot flex-center color-white">
                  HOT
                </div>
                <img src="/img/bagel.png" className="catalog-list-one__img" />
                <h3 className="color-brown">{item.name}</h3>
                <p className="text">{item.section}</p>
                <p className="text color-red">${item.price}.00</p>
                <BasketIcon model={"addToCart"} item={item} />
              </div>
            );
          } else {
            return (
              <div key={i} className="catalog-list-one flex-center">
                <div className="catalog-list-one__discount flex-center color-white">
                  -{item.discount}%
                </div>
                <img src="/img/bagel.png" className="catalog-list-one__img" />
                <h3 className="color-brown">{item.name}</h3>
                <p className="text">{item.section}</p>
                <p className="text color-red">
                  <span className="line-through">${item.price}.00</span> - $
                  {priceWithDiscount}
                </p>
                <BasketIcon model={"addToCart"} item={item} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
