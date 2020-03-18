import React from "react";
import "./Banner.scss";
import api from "../API/api";

interface mySt {
  items: any;
}

class Banner extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount = async () => {
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data
      });
    });
  };

  render() {
    const items = this.state.items;

    return (
      <div className="banner">
        <div className="banner-content">
          <div className="banner-info">
            <div className="banner-price color-beige">
              Price{" "}
              <span className="banner-price color-beige line-through">50$</span>{" "}
              - 30$
            </div>
            <h1 className="banner-title color-brown">
              Best product in our restaurant
            </h1>
            <h1 className="banner-product color-beige">Donuts</h1>
          </div>
          <div className="banner-image">
            <img src="/img/banner.png" alt=" " />
            <div className="banner-discount flex-center color-white text-center">
              40% Offer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
