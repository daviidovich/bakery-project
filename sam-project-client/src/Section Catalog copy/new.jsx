import React from "react";
import { BasketIcon } from "../Another/Icons";
import image from "./bagel.png";
import api from "../API/api";
import "../Basket/Basket.scss";

export class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
      shouldShowElem: false
    };
  }
  componentDidMount = () => {
    this.setState({
      items: arrLS,
      counter: arrLS.length
    });
  };

  updateCounter = () => {
    const items = this.state.items;
    this.setState({
      counter: items.length
    });
  };

  hoverOn = () => {
    const items = this.state.items;
    this.setState({
      shouldShowElem: true,
      counter: items.length
    });
  };

  // hoverOff = () => {
  //   const items = this.state.items;
  //   this.setState({
  //     shouldShowElem: false,
  //     counter: items.length
  //   });
  // };

  render() {
    const items = this.state.items;
    const counter = this.state.counter;
    console.log("basket", items, counter);
    return (
      <div
        className="header-info__basket text flex-center"
        onClickCapture={this.hoverOn}
        // onMouseOut={this.hoverOff}
      >
        {BasketIcon}
        <div className="basket-counter flex-center color-white">
          {this.state.counter}
        </div>
        {this.state.shouldShowElem && (
          <BasketMarkup
            items={this.state.items}
            hadUpdated={this.updateCounter}
          />
        )}
      </div>
    );
  }
}

export class FuncBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
      shouldShowElem: false
    };
  }
  render() {
    return (
      <div>
        <btnAdd />
        <btnDelete />
      </div>
    );
  }
}

export default class btnAdd extends React.Component {
  getProductId = async () => {
    const itemById = await api.getProductById(this.props.id);
    const item = itemById.data.data;
    this.addToLS(item, arrLS);
  };

  addToLS = (item, arrLS) => {
    arrLS.push(item);
    localStorage.setItem("itemById", JSON.stringify(arrLS));

    alert(`Added ${item.product.name}`);
    console.log("arr", arrLS);
  };

  render() {
    return (
      <div
        className="catalog-list-one__basket text"
        onClick={this.getProductId}
      >
        {BasketIcon}
      </div>
    );
  }
}

export default class btnDelete extends React.Component {
  getProductId = async () => {
    const itemById = await api.getProductById(this.props.id);
    const item = itemById.data.data;
    this.addToLS(item, arrLS);
  };

  addToLS = (item, arrLS) => {
    arrLS.push(item);
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    alert(`Added ${item.product.name}`);
    console.log("arr", arrLS);
  };

  render() {
    return <div className="btn-delete" onClick={this.handleRemove}></div>;
  }
}
