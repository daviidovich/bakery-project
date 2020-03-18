import React from "react";
import { getNewPrice } from "../Another/CountPrice";
import api from "../API/api";

interface mySt {
  items: any;
  random: any;
}

export default class OfferCards extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      random: []
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data,
        random: items.data.data
      });
      this.generateRandom();
    });
  };

  generateRandom = () => {
    let items = this.state.items;
    var randomItems: any = [];
    for (var i = 0; i < 4; i++) {
      var randItem = items[Math.floor(Math.random() * items.length)];
      randomItems.push(randItem);
    }
    this.setState({
      random: randomItems
    });
    return randomItems;
  };

  render() {
    const items = this.state.random;

    return (
      <div className="offers-cards flex-space-between">
        {Object.keys(items).map((item: any, i: any) => {
          let oldP = items[i].product.price;
          let disc = items[i].product.discount;
          let newP = getNewPrice(oldP, disc);
          return (
            <div key={i} className="offers-card">
              <div className="offers-card-content">
                <div className="discount-on-image flex-center color-white">
                  -{disc}%
                </div>
                <h3 className="offers-card__title color-brown">
                  {items[i].product.name}
                </h3>
                <p className="offers-card__text text">
                  Before <span className="line-through">{oldP}$</span> -{" "}
                  <span className="color-red">After {newP}$</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
