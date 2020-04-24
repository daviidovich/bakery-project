import React, { Component } from "react";
import "../style/pages.scss";
import { completedOrders } from "../components/OrderCart";

import Table from "react-bootstrap/Table";

class CompletedOrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      totalPrice: 0,
    };
  }
  componentDidMount = () => {
    this.setInitialItems();
    this.setTotalPrice();
  };

  setInitialItems = () => {
    this.setState({
      orders: completedOrders,
    });
  };

  setTotalPrice = () => {
    let totalPrice = 0;
    completedOrders.forEach((item) => {
      totalPrice += item.totalPrice;
    });

    this.setState({
      totalPrice: totalPrice,
    });
  };

  render() {
    const orders = this.state.orders;

    return (
      <div className="completed-orders">
        <Table striped bordered hover size="sm">
          <thead>
            <tr className="text-center">
              <th>№</th>
              <th>ID</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{order._id}</td>
                  <td>${order.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <h2 className="color-brown">In total: ${this.state.totalPrice}</h2>
      </div>
    );
  }
}

export default CompletedOrdersList;
