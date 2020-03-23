import React from "react";
import { BasketIcon } from "../Another/Icons";
import image from "./bagel.png";
import api from "../API/api";
import "../Basket/Basket.scss";

var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];
console.log(arrLS);

// export default class BtnAdd extends React.Component {
//   getProductId = async () => {
//     const itemById = await api.getProductById(this.props.id);
//     const item = itemById.data.data;
//     this.addToLS(item, arrLS);
//   };

//   addToLS = (item, arrLS) => {
//     arrLS.push(item);
//     localStorage.setItem("itemById", JSON.stringify(arrLS));
//     if (this.props.getArr) this.props.getArr(arrLS);
//     alert(`Added ${item.product.name}`);
//     console.log("arr", arrLS);
//   };
//   render() {
//     return (
//       <div
//         className="catalog-list-one__basket text"
//         onClick={this.getProductId}
//       >
//         {BasketIcon}
//       </div>
//     );
//   }
// }

const BtnAdd = props => {
  const getProductId = async () => {
    const itemById = await api.getProductById(props.id);
    const item = itemById.data.data;
    addToLS(item, arrLS);
    if (props.getNewArr) props.getNewArr(arrLS);
    props.updateCounter();
  };

  const addToLS = (item, arrLS) => {
    arrLS.push(item);
    localStorage.setItem("itemById", JSON.stringify(arrLS));
    alert(`Added ${item.product.name}`);
    console.log("arr", arrLS);
  };
  return (
    <div className="catalog-list-one__basket text" onClick={getProductId}>
      {BasketIcon}
    </div>
  );
};

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
    console.log("moUNT");
    this.setState({
      items: arrLS,
      counter: arrLS.length
    });
  }

  updateCounter = () => {
    console.log("Update");
    const items = this.state.items;
    console.log(this.state);
    this.setState({
      // counter: items.length
      items: arrLS,
      counter: arrLS.length
    });
    console.log(this.state);
  };

  hoverOn = () => {
    const items = this.state.items;
    this.setState({
      shouldShowElem: true,
      counter: items.length
    });
    // if (this.state.shouldShowElem)
    //   this.setState({
    //     shouldShowElem: false
    //   });
  };

  handleAdd = arr => {
    this.setState({
      items: arr
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
    // const items = this.state.items;
    // const counter = this.state.counter;
    // console.log("basket", items, counter);
    console.log(this.state);
    if (this.props.model === "basket") {
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
    } else if (this.props.model === "addToCart") {
      return (
        <BtnAdd
          id={this.props.id}
          updateCounter={this.updateCounter}
          getNewArr={this.handleAdd}
        />
      );
    } else return true;
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
      </div>
    );
  }
}
