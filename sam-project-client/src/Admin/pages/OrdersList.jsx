import React, { Component } from "react";
import api from "../api/api";
import "../style/pages.scss";
import OrderCart from "../components/OrderCart";

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await api.getOrders().then((orders) => {
      this.setInitialItems(orders);
    });
  };

  setInitialItems = (orders) => {
    this.setState({
      items: orders.data.data,
    });
  };

  render() {
    const orders = this.state.items;

    return (
      <div className="orders-content">
        {orders.map((order, i) => {
          return (
            <OrderCart key={i} order={order} update={this.componentDidMount} />
          );
        })}
      </div>
    );
  }
}

export default OrdersList;
