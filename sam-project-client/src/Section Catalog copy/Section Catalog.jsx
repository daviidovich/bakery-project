import React from "react";
import "./Section Catalog.scss";
import api from "../API/api";
import Headline from "../Another/Sections headline";
import image from "./bagel.png";
import NavBySection from "./NavBySection";
import { BasketIcon } from "../Another/Icons";
import Btn from "./AddToBasket";
import { Basket } from "./AddToBasket";

// interface mySt {
//   items: any;
// }

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsToShow: []
    };
  }

  componentDidMount = async () => {
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data,
        itemsToShow: items.data.data
      });
    });
  };

  filterCatalogSections = value => {
    if (value === "Show All") {
      this.setState({
        itemsToShow: this.state.items
      });
      return this.state.items;
    }
    const items = this.state.items;
    let filterItems = items.filter(function(item) {
      return item.section === value;
    });
    this.setState({
      itemsToShow: filterItems
    });
    return filterItems;
  };

  render() {
    const items = this.state.itemsToShow;
    return (
      <div className="catalog" id="catalog">
        <Headline label="Seller Products" />
        <div className="catalog-content flex-center">
          <NavBySection
            items={this.state.items}
            getNavValue={this.filterCatalogSections}
          />
          <div className="catalog-list">
            <div className="catalog-list-content">
              {Object.keys(items).map(i => {
                return (
                  <div key={i} className="catalog-list-one flex-center">
                    {/* <BtnAdd id={items[i]._id} /> */}
                    <Basket model={"addToCart"} id={items[i]._id} />
                    <img src={image} className="catalog-list-one__img" />
                    <h3 className="color-brown">{items[i].name}</h3>
                    <p className="text">{items[i].section}</p>
                    <p className="text color-red">${items[i].price}.00</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
