import React from "react";
import { BasketIcon } from "../Another/Icons";
import image from "./bagel.png";
import api from "../API/api";
import "../Basket/Basket.scss";

var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];

export class AddtoBasket extends React.Component {
  getProductId = async () => {
    const itemById = await api.getProductById(this.props.id);
    const item = itemById.data.data;
    this.addToLS(item, arrLS);
  };

  addToLS = (item, arrLS) => {
    arrLS.push(item);
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    if (this.props.getArr) this.props.getArr(arrLS);
    alert(`Added ${item.product.name}`);
    console.log("arr", arrLS);
  };
}

export default class BtnAdd extends React.Component {
  render() {
    return (
      <div className="catalog-list-one__basket text" onClick={AddtoBasket}>
        {BasketIcon}
      </div>
    );
  }
}

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

export class BasketMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      prices: []
    };
  }

  handleInsert = arr => {
    this.setState({ items: arr });
  };

  handleRemove = i => {
    arrLS.splice(i, 1);
    this.setState({ items: arrLS });
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    if (this.props.hadUpdated) this.props.hadUpdated();
  };

  render() {
    const items = this.props.items;

    return (
      <div className="mybasket">
        {Object.keys(items).map(i => {
          return (
            <div key={i} className="mybasket-prod">
              <img src="/img/muffin.png" />
              <div>
                <p className="text color-white">{items[i].product.name}</p>
                <p className="text color-white">{items[i].product.price}</p>
              </div>
              <div className="btn-delete" onClick={this.handleRemove}></div>
            </div>
          );
        })}
        <div className="total-price">Total price: </div>
        <AddtoBasket getArr={this.handleInsert} />
      </div>
    );
  }
}
