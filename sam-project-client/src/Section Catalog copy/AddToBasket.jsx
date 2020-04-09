import React from "react";
import { BasketIcon } from "../Another/Icons";
import image from "./bagel.png";
import api from "../API/api";
import "../Basket/Basket.scss";

var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];
console.log("start ArrLS", arrLS);

export default class BtnAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0
    };
  }
  getProductId = async () => {
    const itemById = await api.getProductById(this.props.id);
    const item = itemById.data.data;
    this.addToLS(item);
  };

  addToLS = item => {
    arrLS.push(item);
    alert(`Added ${item.name}`);
    this.setState({ items: arrLS, counter: arrLS.length });
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    console.log("add", arrLS);
    if (this.props.stateOfBasket) this.props.stateOfBasket();
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

export class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
      shouldShowElem: false
    };
  }

  componentDidMount() {
    this.setState({
      items: arrLS,
      counter: arrLS.length
    });
  }

  stateOfBasket = () => {
    console.log("coming arr", arrLS);
    const items = this.state.items;
    this.setState({
      items: arrLS,
      counter: arrLS.length,
      shouldShowElem: true
    });
    if (this.state.shouldShowElem)
      this.setState({
        shouldShowElem: false
      });
    console.log("state of basket", this.state.items, this.state.counter);
  };

  openBasket = () => {
    const items = this.state.items;
    this.stateOfBasket();
    this.setState({
      shouldShowElem: true
    });
    // if (this.state.shouldShowElem)
    //   this.setState({
    //     shouldShowElem: false
    //   });
  };

  render() {
    const items = this.state.items;
    const counter = this.state.counter;

    if (this.props.model === "basket") {
      return (
        <div
          className="header-info__basket text flex-center"
          onClick={this.openBasket}
          // onMouseOut={this.hoverOff}
        >
          {BasketIcon}
          <div className="basket-counter flex-center color-white">
            {this.state.counter}
          </div>
          {this.state.shouldShowElem && (
            <BasketMarkup
              items={this.state.items}
              stateOfBasket={this.stateOfBasket}
            />
          )}
        </div>
      );
    } else if (this.props.model === "addToCart") {
      return <BtnAdd id={this.props.id} stateOfBasket={this.stateOfBasket} />;
    } else return true;
  }
}

export class BasketMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0
    };
  }

  handleRemove = i => {
    arrLS.splice(i, 1);
    this.setState({ items: arrLS, counter: arrLS.length });
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    console.log("delete", arrLS);
    if (this.props.stateOfBasket) this.props.stateOfBasket();
  };

  stateOfMarkup = arrLS => {
    console.log("coming arr markup", arrLS);
    const items = this.state.items;
    this.setState({
      items: arrLS,
      counter: arrLS.length
    });
    console.log("state of markup", this.state.items, this.state.counter);
  };

  // countTotalPrice = () => {
  //   let totalPriceArr = [];
  //   arrLS.forEach(function(item, i) {
  //     totalPriceArr.push(item.price);
  //   });
  //   console.log("array sum", totalPriceArr);

  //   var result = 0;
  //   for (var i = 0; i < totalPriceArr.length; i++) {
  //     result += totalPriceArr[i];
  //   }
  //   console.log("summa", result);
  //   Returnresult();
  //   var Returnresult = function() {
  //     return <span>{result}</span>;
  //   };
  //   return <Returnresult />;
  // };

  render() {
    const items = this.props.items;

    return (
      <div className="mybasket">
        {Object.keys(items).map(i => {
          return (
            <div key={i} className="mybasket-prod">
              <img src="/img/muffin.png" />
              <div>
                <p className="text color-white">{items[i].name}</p>
                <p className="text color-white">${items[i].price}</p>
              </div>
              <div className="btn-delete" onClick={this.handleRemove}></div>
            </div>
          );
        })}
        <TotalPrice />
      </div>
    );
  }
}

class TotalPrice extends React.Component {
  render() {
    let totalPriceArr = [];
    arrLS.forEach(function(item, i) {
      totalPriceArr.push(item.price);
    });

    var result = 0;
    for (var i = 0; i < totalPriceArr.length; i++) {
      result += totalPriceArr[i];
    }
    if (arrLS != 0) {
      return (
        <div className="total-price">
          Total price: <span>${result}</span>
        </div>
      );
    } else {
      return <div className="total-price">В корзине пусто!</div>;
    }
  }
}
