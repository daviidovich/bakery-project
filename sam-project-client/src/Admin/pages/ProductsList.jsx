import React, { Component } from "react";
import api from "../api/api";
import "../style/pages.scss";
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
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/admhome/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteProduct extends Component {
  handleRemove = (event) => {
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
      items: [],
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then((items) => {
      this.setState({
        items: items.data.data,
      });
    });
  };

  render() {
    const items = this.state.items;

    return (
      <div className="products-list">
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
              <th>Flag</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{item._id}</td>
                  <td>{item.section}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.flag}</td>
                  <td>
                    <DeleteProduct
                      id={item._id}
                      updated={this.componentDidMount}
                    />
                  </td>
                  <td>
                    <UpdateProduct id={item._id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductsList;
