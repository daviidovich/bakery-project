import React, { Component } from "react";
import api from "../api/api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1 color-brown"
})`
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.form.attrs({
  className: "form-group"
})`
  margin: 30px 100px;
`;

const Label = styled.label.attrs({
  className: "text"
})`
  margin: 5px;
`;

const Select = styled.select.attrs({
  className: "form-control"
})`
  margin: 5px;
  width: 400px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
  width: 400px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

class ProductsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params._id,
      section: "",
      name: "",
      description: "",
      price: "",
      discount: ""
    };
  }

  handleChangeInputSection = async event => {
    console.log(event.target.value);
    const section = event.target.value;
    this.setState({ section });
  };

  handleChangeInputName = async event => {
    var name =
      event.target.value[0].toUpperCase() + event.target.value.slice(1);
    console.log(name);
    this.setState({ name });
  };

  handleChangeInputDesc = async event => {
    //this.value = this.value[0].toUpperCase() + this.value.slice(1);
    const description = event.target.value;
    this.setState({ description });
  };

  handleChangeInputPrice = async event => {
    const price = event.target.validity.valid
      ? event.target.value
      : this.state.price;

    this.setState({ price });
  };

  handleChangeInputDiscount = async event => {
    const discount = event.target.validity.valid
      ? event.target.value
      : this.state.discount;

    this.setState({ discount });
  };

  handleUpdateProduct = async () => {
    const { id, section, name, description, discount, price } = this.state;
    const payload = { section, name, description, discount, price };

    await api.updateProductById(id, payload).then(res => {
      window.alert(`Product updated successfully`);
      this.setState({
        section: "",
        name: "",
        description: "",
        price: "",
        discount: ""
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const product = await api.getProductById(id);

    this.setState({
      section: product.data.data.section,
      name: product.data.data.name,
      description: product.data.data.description,
      price: product.data.data.price,
      discount: product.data.data.discount
    });
  };

  render() {
    const { section, name, description, discount, price } = this.state;
    return (
      <Wrapper>
        <Title>Create Product</Title>
        <Label>Section: </Label>
        <Select value={section} onChange={this.handleChangeInputSection}>
          <option value="" hidden>
            Select the section
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
        {/* <InputText
          type="text"
          value={section}
          onChange={this.handleChangeInputSection}
        /> */}

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Description: </Label>
        <InputText
          type="text"
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

        {/* <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={rating}
          onChange={this.handleChangeInputRating}
        /> */}

        <Button onClick={this.handleUpdateProduct}>Update Product</Button>
        <CancelButton href={"/admhome/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default ProductsUpdate;
