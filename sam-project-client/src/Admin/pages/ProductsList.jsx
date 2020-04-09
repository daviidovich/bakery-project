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

class UpdateProduct extends Component {
  updateUser = event => {
    //event.preventDefault();
    //window.location.href = `/admhome/update/${this.props.id}`;

    if (window.confirm(`Do tou want to update the product ${this.props.id}?`)) {
      return (
        <Link
          to={`/admhome/update/${this.props.id}`}
          className="nav-link"
        ></Link>
      );
    }
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteProduct extends Component {
  handleRemove = event => {
    event.preventDefault();
    if (window.confirm(`Do tou want to delete the product ${this.props.id}?`)) {
      api.deleteProductById(this.props.id);
      //window.location.reload();
      if (this.props.updated) this.props.updated();
    }
  };
  render() {
    return <Delete onClick={this.handleRemove}>Delete</Delete>;
  }
}

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data
      });
    });
  };

  render() {
    const items = this.state.items;
    console.log("итемы:", items);

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>№</th>
            <th>ID</th>
            <th>Section</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price, $</th>
            <th>Discount, %</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map(i => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{items[i]._id}</td>
                <td>{items[i].section}</td>
                <td>{items[i].name}</td>
                <td>{items[i].description}</td>
                <td>{items[i].price}</td>
                <td>{items[i].discount}</td>
                <td>
                  <DeleteProduct
                    id={items[i]._id}
                    updated={this.componentDidMount}
                  />
                </td>
                <td>
                  <UpdateProduct id={items[i]._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default ProductsList;
