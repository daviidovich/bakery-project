import React from "react";
import "../style/authorization.css";
import api from "../api/api";
//import { Redirect } from "react-router-dom";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1 color-brown",
})`
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.form.attrs({
  className: "form-group autho-form",
})`
  position: absolute;
  top: 200px;
  left: 35%;
  padding: 50px 100px;
  background-color: #ffedd8;
  border: 2px solid #eaeae8;
  border-radius: 20px;
`;

const Label = styled.label.attrs({
  className: "text",
})`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
  width: 300px;
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

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isLoggedIn: false,
    };
  }

  handleChangeInputLogin = async (event) => {
    const login = event.target.value;
    this.setState({ login });
  };

  handleChangeInputPassword = async (event) => {
    var password = event.target.value;
    this.setState({ password });
  };

  handleCheckLogin = (event) => {
    event.preventDefault();

    const { login, password } = this.state;
    const payload = { login, password };

    api.makeAutho(payload).then((res) => {
      if (res.status === 200) {
        console.log("makeautho", res);
      }
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <Wrapper>
        <Title>SIGN IN</Title>
        <Label>LOGIN</Label>
        <InputText
          type="text"
          value={login}
          onChange={this.handleChangeInputLogin}
        />

        <Label>PASSWORD</Label>
        <InputText
          type="password"
          value={password}
          onChange={this.handleChangeInputPassword}
        />

        <Button onClick={this.handleCheckLogin}>Log in</Button>
        <CancelButton href={"/"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default Authorization;
