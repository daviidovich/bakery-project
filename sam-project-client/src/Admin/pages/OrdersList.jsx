import React, { Component } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

// class UpdateProduct extends Component {
//   updateUser = event => {
//     //event.preventDefault();
//     //window.location.href = `/admhome/update/${this.props.id}`;

//     if (window.confirm(`Do tou want to update the product ${this.props.id}?`)) {
//       return (
//         <Link
//           to={`/admhome/update/${this.props.id}`}
//           className="nav-link"
//         ></Link>
//       );
//     }
//   };

//   render() {
//     return <Update onClick={this.updateUser}>Update</Update>;
//   }
// }

// class DeleteProduct extends Component {
//   handleRemove = event => {
//     event.preventDefault();
//     if (window.confirm(`Do tou want to delete the product ${this.props.id}?`)) {
//       api.deleteProductById(this.props.id);
//       //window.location.reload();
//       if (this.props.updated) this.props.updated();
//     }
//   };
//   render() {
//     return <Delete onClick={this.handleRemove}>Delete</Delete>;
//   }
// }

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await api.getOrders().then((orders) => {
      this.setState({
        items: orders.data.data,
      });
    });
  };

  render() {
    const orders = this.state.items;
    console.log("orders:", orders);
    // let i = 0;
    // const orderItems = orders.items.item._id;
    // console.log("orderItems", orderItems);

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>№</th>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Info</th>
            <th>Products</th>
            <th>Total Price, $</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(orders).map((i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{orders[i]._id}</td>
                <td>{orders[i].name}</td>
                <td>{orders[i].address}</td>
                <td>{orders[i].phone}</td>
                <td>{orders[i].info}</td>
                <td>
                  {Object.keys(orders[i].items).map((i) => {
                    return (
                      <tr>
                        <td>
                          <li>{orders[i].items[i].item.name}</li>
                        </td>
                        <td>
                          <li>{orders[i].items[i].quantity}</li>
                        </td>
                      </tr>
                    );
                  })}
                </td>
                <td>{orders[i].totalPrice}</td>
                {/* <td>
                  <DeleteProduct
                    id={items[i]._id}
                    updated={this.componentDidMount}
                  />
                </td>
                <td>
                  <UpdateProduct id={items[i]._id} />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default OrdersList;
