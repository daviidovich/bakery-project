import React from "react";
import "./Section Catalog.scss";
import api from "../API/api";
import Headline from "../Another/Sections headline";
import NavBySection from "./NavBySection";
import CatalogCart from "./CatalogCart";

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
            <CatalogCart
              items={this.state.itemsToShow}
              stateRise={this.props.stateRise}
            />
          </div>
        </div>
      </div>
    );
  }
}
