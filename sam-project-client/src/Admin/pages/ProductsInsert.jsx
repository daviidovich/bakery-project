import React from "react";

import api from "../api/api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1 color-brown",
})`
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.form.attrs({
  className: "form-group",
})`
  margin: 30px 100px;
`;

const Label = styled.label.attrs({
  className: "text",
})`
  margin: 5px;
`;

const Select = styled.select.attrs({
  className: "form-control",
})`
  margin: 5px;
  width: 400px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
  width: 400px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

// interface mySt {
//   section: string;
//
//     name: string;
//     description: string;
//     discount: number;
//     price: number;
//
// }

class ProductsInsert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "",
      name: "",
      description: "",
      price: "",
      discount: "",
      flag: "",
    };
  }

  handleChangeInputSection = async (event) => {
    const section = event.target.value;
    this.setState({ section });
  };

  handleChangeInputName = async (event) => {
    //var name = event.target.value[0].toUpperCase() + event.target.value.slice(1);
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputDesc = async (event) => {
    //var desc = this.value[0].toUpperCase() + this.value.slice(1);
    const description = event.target.value;
    this.setState({ description });
  };

  handleChangeInputPrice = async (event) => {
    const price = event.target.validity.valid
      ? event.target.value
      : this.state.price;

    this.setState({ price });
  };

  handleChangeInputDiscount = async (event) => {
    const discount = event.target.validity.valid
      ? event.target.value
      : this.state.discount;

    this.setState({ discount });
  };

  handleChangeInputFlag = async (event) => {
    const flag = event.target.value;
    this.setState({ flag });
  };

  handleIncludeProduct = async (event) => {
    event.preventDefault();
    const { section, name, description, discount, price, flag } = this.state;
    const payload = { section, name, description, discount, price, flag };

    await api.insertProduct(payload).then((res) => {
      this.setState({
        section: "",
        name: "",
        description: "",
        discount: "",
        price: "",
        flag: "",
      });
    });
    window.alert(`${name} inserted successfully`);
    window.location.href = `/admin/list`;
  };

  render() {
    const { section, name, description, discount, price, flag } = this.state;
    return (
      <Wrapper>
        <Title>Create Product</Title>
        <Label>Section: </Label>
        <Select value={section} onChange={this.handleChangeInputSection}>
          <option value="" hidden>
            *Select the section
          </option>
          <option value="Bagels">Bagel</option>
          <option value="Chefs">Chef</option>
          <option value="Cakes">Cake</option>
          <option value="Toasts">Toast</option>
          <option value="Muffins">Muffin</option>
          <option value="Pastries">Pastrie</option>
          <option value="Cookies">Cookie</option>
          <option value="Donuts">Donut</option>
        </Select>

        <Label>Name: </Label>
        <InputText
          type="text"
          placeholder="*"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Description: </Label>
        <InputText
          type="text"
          placeholder="*"
          value={description}
          onChange={this.handleChangeInputDesc}
        />

        <Label>Price: </Label>
        <InputText
          type="number"
          step="1"
          lang="en-US"
          min="0"
          max="100"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={price}
          placeholder="*"
          onChange={this.handleChangeInputPrice}
        />

        <Label>Discount: </Label>
        <InputText
          type="number"
          step="1"
          lang="en-US"
          min="0"
          max="100"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={discount}
          onChange={this.handleChangeInputDiscount}
        />

        <Label>Flag: </Label>
        <Select value={flag} onChange={this.handleChangeInputFlag}>
          <option value="" hidden>
            Select the flag
          </option>
          <option value="">-</option>
          <option value="Banner">Banner</option>
          <option value="Offer of week">Offer of week</option>
        </Select>

        <Button onClick={this.handleIncludeProduct}>Add Product</Button>
      </Wrapper>
    );
  }
}

export default ProductsInsert;
