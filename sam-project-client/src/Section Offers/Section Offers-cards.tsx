import React from "react";

interface myProps {
  newPrice: number;
  offer: any;
}

export default class OfferCard extends React.Component<myProps> {
  // generateRandom = () => {
  //   let items = this.state.items;
  //   var randomItems: any = [];
  //   let i: number = 0;
  //   do {
  //     var randItem = items[Math.floor(Math.random() * items.length)];
  //     if (randItem.discount > 0) {
  //       randomItems.push(randItem);
  //     }
  //     i++;
  //   } while (randomItems.length < 4);
  //   console.log("rand", randomItems);
  //   this.setState({
  //     random: randomItems,
  //   });
  //   return this.state.random;
  // };

  render() {
    const offer = this.props.offer;
    const newPrice = this.props.newPrice;
    return (
      <div className="offers-card">
        <div className="offers-card-content">
          <div className="discount-on-image flex-center color-white">
            -{offer.discount}%
          </div>
          <h3 className="offers-card__title color-brown">{offer.name}</h3>
          <p className="offers-card__text text">
            Before <span className="line-through">{offer.price}$</span> -{" "}
            <span className="color-red">After {newPrice}$</span>
          </p>
        </div>
      </div>
    );
  }
}
