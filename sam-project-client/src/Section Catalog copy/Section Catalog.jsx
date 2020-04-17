import React from "react";
import "./Section Catalog.scss";
import api from "../API/api";
import Headline from "../Another/Sections headline";
import image from "./bagel.png";
import NavBySection from "./NavBySection";
import { BasketIcon } from "../Another/Icons";
import Btn, { BasketMarkup } from "./AddToBasket";
import { Basket } from "./AddToBasket";
import { getNewPrice } from "../Another/CountPrice";

// interface mySt {
//   items: any;
// }

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsToShow: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllProducts().then((items) => {
      this.setState({
        items: items.data.data,
        itemsToShow: items.data.data,
      });
    });
  };

  filterCatalogSections = (value) => {
    if (value === "Show All") {
      this.setState({
        itemsToShow: this.state.items,
      });
      return this.state.items;
    }
    const items = this.state.items;
    let filterItems = items.filter(function (item) {
      return item.section === value;
    });
    this.setState({
      itemsToShow: filterItems,
    });
    return filterItems;
  };

  render() {
    return (
      <div className="catalog" id="catalog">
        <Headline label="Seller Products" />
        <div className="catalog-content flex-center">
          <NavBySection
            items={this.state.items}
            getNavValue={this.filterCatalogSections}
          />
          <div className="catalog-list">
            <CatalogCart items={this.state.itemsToShow} />
          </div>
        </div>
      </div>
    );
  }
}

export class CatalogCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsToShow: [],
    };
  }

  render() {
    const items = this.props.items;

    return (
      <div className="catalog-list-content">
        {Object.keys(items).map((i) => {
          let priceWithDiscount = getNewPrice(
            items[i].price,
            items[i].discount
          );
          if (items[i].discount === 0) {
            return (
              <div key={i} className="catalog-list-one flex-center">
                <div className="catalog-list-one__hot flex-center color-white">
                  HOT
                </div>
                <img src={image} className="catalog-list-one__img" />
                <h3 className="color-brown">{items[i].name}</h3>
                <p className="text">{items[i].section}</p>
                <p className="text color-red">${items[i].price}.00</p>
                <Basket model={"addToCart"} id={items[i]._id} />
              </div>
            );
          } else {
            return (
              <div key={i} className="catalog-list-one flex-center">
                <div className="catalog-list-one__discount flex-center color-white">
                  -{items[i].discount}%
                </div>
                <img src={image} className="catalog-list-one__img" />
                <h3 className="color-brown">{items[i].name}</h3>
                <p className="text">{items[i].section}</p>
                <p className="text color-red">
                  <span className="line-through">${items[i].price}.00</span> - $
                  {priceWithDiscount}
                </p>
                <Basket model={"addToCart"} id={items[i]._id} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
