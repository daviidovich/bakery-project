import React, { useState, useEffect } from "react";
import { ShopIcon } from "../Another/Icons";
import "./Basket.scss";
import BasketMarkup from "./BasketMarkup";
import BtnAdd from "./BtnAdd";

export var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];
console.log("start ArrLS", arrLS);

export default class BasketIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      counter: 0,
      displayMarkup: false,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.setCounter();
    this.setMarkupCarts();
  }

  componentDidUpdate() {
    console.log("state items", this.state.items);
    console.log("state counter", this.state.counter);

    console.log("arrLs", arrLS);

    console.log("component did update");
    // if (this.props.itemsFromRise) {
    //   this.setMarkupCarts(this.props.itemsFromRise);
    //   this.setCounter(this.props.itemsFromRise);
    // }
  }

  openMarkup = () => {
    this.setState({ displayMarkup: true });
    if (this.state.displayMarkup) {
      this.setState({ displayMarkup: false });
    }
  };

  // updateMarkup = () => {
  //   this.setLocalStorage(this.props.itemsFromRise);
  //   this.setMarkupCarts(this.props.itemsFromRise);
  //   this.setCounter(this.props.itemsFromRise);
  //   this.setState({ displayMarkup: false });
  //   console.log("update Basketmarkup");
  // };

  // setLocalStorage = (arr) => {
  //   localStorage.setItem("itemById", JSON.stringify(arr));
  //   console.log("set LS", arr);
  // };

  setMarkupCarts = () => {
    this.setState({ items: arrLS });
    console.log("set Carts", this.state.items);
  };

  setCounter = () => {
    this.setState({ counter: this.state.counter + 1 });

    // let counter = 0;
    // arrLS.forEach((item) => {
    //   counter += item.quantity;
    // });

    // this.setState({
    //   counter: counter,
    // });

    console.log("set Counter", this.state.counter);
  };

  render() {
    return (
      <div
        className="header-info__basket text flex-center"
        onClick={this.openMarkup}
      >
        {ShopIcon}
        <div className="basket-counter flex-center color-white">
          {this.state.counter}
        </div>
        {this.state.displayMarkup && (
          <BasketMarkup
            items={this.state.items}
            //updateMarkup={this.updateMarkup}
          />
        )}
      </div>
    );
  }
}

// export default class BasketIcon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       counter: 0,
//       displayMarkup: false,
//     };
//   }

//   componentDidMount() {
//     this.setMarkupCarts();
//     this.setCounter();
//   }

//   openMarkup = () => {
//     this.setState({ displayMarkup: true });
//     if (this.state.displayMarkup) {
//       this.setState({ displayMarkup: false });
//     }
//   };

//   updateMarkup = () => {
//     this.setLocalStorage();
//     this.setMarkupCarts();
//     this.setCounter();
//     this.setState({ displayMarkup: false });
//     console.log("update Basketmarkup");
//   };

//   setLocalStorage = () => {
//     localStorage.setItem("itemById", JSON.stringify(arrLS));
//     console.log("set LS", arrLS);
//   };

//   setMarkupCarts = () => {
//     this.setState({ items: arrLS });
//     console.log("set Carts", arrLS);
//   };

//   setCounter = () => {
//     let counter = 0;
//     arrLS.forEach((item) => {
//       counter += item.quantity;
//     });

//     this.setState({
//       counter: counter,
//     });

//     console.log("set Counter", this.state.counter);
//   };

//   render() {
//     if (this.props.model === "basket") {
//       return (
//         <div
//           className="header-info__basket text flex-center"
//           onClick={this.openMarkup}
//         >
//           {ShopIcon}
//           <div className="basket-counter flex-center color-white">
//             {this.state.counter}
//           </div>
//           {this.state.displayMarkup && (
//             <BasketMarkup
//               items={this.state.items}
//               updateMarkup={this.updateMarkup}
//             />
//           )}
//         </div>
//       );
//     } else if (this.props.model === "addToCart") {
//       return <BtnAdd item={this.props.item} updateMarkup={this.updateMarkup} />;
//     } else return true;
//   }
// }
