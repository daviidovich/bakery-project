import React from "react";

import styled from "styled-components";
import api from "../API/api";
import { arrLS } from "../Section Catalog copy/AddToBasket";

const Title = styled.h2.attrs({
  className: "h2 color-brown",
})`
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.form.attrs({
  className: "form-group",
})`
  margin: 0 100px;
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

export default class UserDataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      info: "",
      payment: "",
    };
    this.handleSendOrder = this.handleSendOrder.bind(this);
  }

  handleChangeInputName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeInputAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  handleChangeInputPhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleChangeInputInfo = (e) => {
    this.setState({ info: e.target.value });
  };

  handleChangeInputPayment = (e) => {
    this.setState({ payment: e.target.value });
  };

  handleSendOrder = async (e) => {
    e.preventDefault();

    const { name, address, phone, info, payment } = this.state;
    this.setState({
      name: "",
      address: "",
      phone: "",
      info: "",
      payment: "",
    });

    console.log(this.state);
    if (this.state) this.props.userData(this.state);
  };

  render() {
    const { name, address, phone, info, payment } = this.state;
    return (
      <Wrapper>
        <Title>Creating Order</Title>
        <Label>Your name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Your address: </Label>
        <InputText
          type="text"
          value={address}
          onChange={this.handleChangeInputAddress}
        />

        <Label>Your phone: </Label>
        <InputText
          type="text"
          //pattern="+375([0-9]{2})[0-9]{3}-[0-9]{2}-[0-9]{2}"
          value={phone}
          onChange={this.handleChangeInputPhone}
        />

        <Label>Additional info: </Label>
        <InputText
          type="text"
          value={info}
          onChange={this.handleChangeInputInfo}
        />

        <Label>Type of payment: </Label>
        <Select value={payment} onChange={this.handleChangeInputPayment}>
          <option value="" hidden>
            Select the type
          </option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </Select>

        <Button onClick={this.handleSendOrder}>Send</Button>
      </Wrapper>
    );
  }
}
