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

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Select = styled.select.attrs({
  className: "form-control",
})`
  background-color: #dfa45c;
  color: white;
  width: 120px;
  border-radius: 0 5px 5px 0;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  width: 300px;
  border-radius: 5px 0px 0px 5px;
`;

class UpdateProduct extends Component {
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/admin/update/${this.props.id}`;
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
      window.location.reload();
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
      searchResult: [],
    };
  }
  componentDidMount = async () => {
    await api.getAllProducts().then((items) => {
      this.setState({
        items: items.data.data,
        searchResult: items.data.data,
      });
    });
  };

  handleSearch = (e) => {
    let searchQuery = e.target.value.toLowerCase(); // this указывает на текущий объект - search
    const items = this.state.items;
    let searchResult = this.state.searchResult;

    searchResult = items.filter(function (item) {
      var userString = item.id + " " + item.name + " " + item.section;
      userString = userString.toLowerCase();
      if (userString.indexOf(searchQuery) !== -1) return true;
    });
    this.setState({ searchResult: searchResult });
  };

  handleSortBy = (e) => {
    const searchResult = this.state.searchResult;
    var currentOption = e.target.value;

    function sortObjects(a, b) {
      if (a[currentOption] > b[currentOption]) return 1;
      else return -1;
    }
    searchResult.sort(sortObjects);
    this.setState({ searchResult: searchResult });
  };

  render() {
    const searchResult = this.state.searchResult;

    return (
      <div className="products-list">
        <Wrapper>
          <InputText
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <Select onChange={this.handleSortBy}>
            <option value="" hidden>
              Sort by:
            </option>
            <option value="name">Name</option>
            <option value="section">Section</option>
            <option value="price">Price ↑</option>
          </Select>
        </Wrapper>

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
            {searchResult.map((item, i) => {
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
