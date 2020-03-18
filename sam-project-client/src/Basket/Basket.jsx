import React from "react";
import "./Basket.scss";
import { BasketIcon } from "../Another/Icons";

let itemFromLS = JSON.parse(window.localStorage.getItem("itemById")) || [];

// interface mySt {
//   items: any;
// }

// interface stLS {
//   obj: any;
// }

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleClick = event => {
    return <div className="basket-hidden"></div>;
  };

  //   handleRemove(i: any) {
  //     // Create a new array without the clicked item
  //     var newItems = this.state.items;
  //     newItems.splice(i, 1);
  //     // Set the new state
  //     this.setState({ items: newItems });
  //   }

  getFromLS = () => {
    console.log("fromLS", itemFromLS);
    this.setState({
      items: itemFromLS
    });
  };

  render() {
    const items = this.state.items;
    console.log("basket", items);
    return (
      <div
        className="header-info__basket text flex-center"
        onClick={this.getFromLS}
      >
        {BasketIcon}
        <div className="basket-counter flex-center color-white">
          {/* {this.state.counter} */}
        </div>
      </div>
    );
  }
}
