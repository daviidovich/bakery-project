import React from "react";
import "./Section Offers.scss";
import Headline from "../Another/Sections headline";
import OfferCard from "./Section Offers-cards";
import { getNewPrice } from "../Another/CountPrice";
import api from "../API/api";

interface mySt {
  items: Array<Object>;
  offers: Array<Object>;
}

export default class Offers extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      offers: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllProducts().then((items: any) => {
      this.setState({
        items: items.data.data,
      });
    });

    const items = this.state.items;
    let offers: Array<any> = [];
    items.forEach((item: any) => {
      if (item.flag === "Offer of week") {
        offers.push(item);
      }
    });
    this.setState({
      offers: offers,
    });
  };

  render() {
    const offers = this.state.offers;

    return (
      <div className="offers" id="offers">
        <Headline label="Offer This Week" />
        <div className="offers-content flex-center">
          <div className="offers-cards flex-center">
            {offers.map((offer: any, i: any) => {
              let newP = getNewPrice(offer.price, offer.discount);
              return <OfferCard key={i} offer={offer} newPrice={newP} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
