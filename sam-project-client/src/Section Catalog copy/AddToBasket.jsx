import React from "react";
import { BasketIcon } from "../Another/Icons";
import image from "./bagel.png";
import api from "../API/api";
import "../Basket/Basket.scss";
import { Link } from "react-router-dom";
import OpenedBasket from "../Basket/Basket";
import Button from "../Button/Button";

export var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];
console.log("start ArrLS", arrLS);

function BasketCounter() {
  let counterArr = [];
  arrLS.forEach(function (item, i) {
    counterArr.push(item.quantity);
  });

  var result = 0;
  for (var i = 0; i < counterArr.length; i++) {
    result += counterArr[i];
  }
  console.log("counter", result);
  return <div className="basket-counter flex-center color-white">{result}</div>;
}

export default class BtnAdd extends React.Component {
  // getProductId = async () => {

  //   this.addToLS(item);
  // };

  addToLS = async () => {
    const itemById = await api.getProductById(this.props.id);
    const item = itemById.data.data;

    let id = this.props.id;
    let addedItem = arrLS.find((elem) => elem.item._id === id);

    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    } else {
      arrLS.push({
        item: item,
        quantity: 1,
      });
    }

    //arrLS.push(item);
    alert(`Added ${item.name}`);

    localStorage.setItem("itemById", JSON.stringify(arrLS));
    console.log("add", arrLS);
    //BasketCounter();
  };

  render() {
    return (
      <div className="catalog-list-one__basket text" onClick={this.addToLS}>
        Add to {BasketIcon}
      </div>
    );
  }
}

// export class BtnDelete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       counter: 0,
//     };
//   }

//   render() {
//     return <div className="btn-delete"></div>;
//   }
// }

export class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
      shouldShowElem: false,
    };
  }

  componentDidMount() {
    console.log("mount", this.state);
    this.setState({
      items: arrLS,
      counter: arrLS.length,
    });
  }

  stateOfBasket = () => {
    const items = this.state.items;
    this.setState({
      items: arrLS,
      counter: arrLS.length,
    });
    console.log("state of basket", this.state.items); //this.state.counter);
  };

  openBasket = () => {
    const items = this.state.items;
    this.stateOfBasket();
    this.setState({
      shouldShowElem: true,
    });

    // if (this.state.shouldShowElem)
    //   this.setState({
    //     shouldShowElem: false,
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
        >
          {BasketIcon}
          {/* <BasketCounter /> */}
          <div className="basket-counter flex-center color-white">
            {this.state.counter}
          </div>

          {this.state.shouldShowElem && (
            <BasketMarkup items={this.state.items} />
          )}
        </div>
      );
    } else if (this.props.model === "addToCart") {
      return <BtnAdd id={this.props.id} />;
    } else return true;
  }
}

export class BasketMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
    };
  }

  handleRemove = (i) => {
    arrLS.splice(i, 1);
    this.setState({ items: arrLS, counter: arrLS.length }); //counter: arrLS.length });
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    console.log("delete", arrLS);
    //BasketCounter();
    if (this.props.stateOfBasket) this.props.stateOfBasket();

    // var itemToBeDeleted = this.state.items.indexOf(itemId);
    // this.state.items.splice(itemToBeDeleted, 1);
    // this.setState(this.state);
    // console.log("arrLS after delete", arrLS);
  };

  render() {
    const items = this.props.items;

    return (
      <div className="mybasket">
        {Object.keys(items).map((i) => {
          return (
            <div key={i} className="mybasket-prod">
              <img src="/img/muffin.png" />
              <div>
                <p className="text color-white">{items[i].item.name}</p>
                <p className="text color-white">
                  {/* ${items[i].price} */}
                  {items[i].quantity} x ${items[i].item.price}
                </p>
              </div>
              <div className="btn-delete" onClick={this.handleRemove}></div>
            </div>
          );
        })}
        <TotalPrice />
        <div className="mybasket-show-more text-center">
          <Link to={"/basket"}>Show All</Link>
        </div>
      </div>
    );
  }
}

class TotalPrice extends React.Component {
  render() {
    let totalPriceArr = [];
    arrLS.forEach(function (item, i) {
      let priceOneItem = item.item.price * item.quantity;
      totalPriceArr.push(priceOneItem);
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
