import React, { useState, useEffect } from "react";
import { ShopIcon } from "../Another/Icons";
import "./Basket.scss";
import BasketMarkup from "./BasketMarkup";

export var arrLS = JSON.parse(localStorage.getItem("itemById")) || [];

export default class BasketIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMarkup: false,
    };
  }
  openMarkup = () => {
    this.setState({ displayMarkup: true });
    if (this.state.displayMarkup) {
      this.setState({ displayMarkup: false });
    }
  };
  render() {
    return (
      <div
        className="header-info__basket text flex-center"
        onClick={this.openMarkup}
      >
        {ShopIcon}
        <Counter />
        {this.state.displayMarkup && (
          <BasketMarkup model={"markup"} updateState={this.props.updateState}/>
        )}
      </div>
    );
  }
}

export function Counter () {
    let counter = 0;
    arrLS.forEach((item) => {
      counter += item.quantity;
    });

    return(
      <div className="basket-counter flex-center color-white">
          {counter}
      </div>
    )
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
