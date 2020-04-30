import React from "react";
import "./Banner.scss";
import api from "../API/api";
import { getNewPrice } from "../Another/CountPrice";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      bannerItem: {},
    };
  }

  componentDidMount = async () => {
    await api.getAllProducts().then((items) => {
      this.setState({
        items: items.data.data,
      });
    });
    const items = this.state.items;
    let bannerItem = items.find((elem) => elem.flag === "Banner");
    this.setState({ bannerItem: bannerItem });
  };

  render() {
    const bannerItem = this.state.bannerItem;

    let newPrice = getNewPrice(bannerItem.price, bannerItem.discount);
    return (
      <div className="banner">
        <div className="banner-content">
          <div className="banner-info">
            <div className="banner-price color-beige">
              Price{" "}
              <span className="banner-price color-beige line-through">
                ${bannerItem.price}
              </span>{" "}
              - ${newPrice}
            </div>
            <h1 className="banner-title color-brown">
              Best product in our restaurant
            </h1>
            <h1 className="banner-product color-beige">{bannerItem.name}</h1>
          </div>
          <div className="banner-image">
            <img src="/img/banner.png" alt=" " />
            <div className="banner-discount flex-center color-white text-center">
              {bannerItem.discount}% Offer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
