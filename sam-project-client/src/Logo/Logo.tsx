import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <Link to={"/"}>
          <img className="logo__img" src="../img/logo.png" alt=" " />
        </Link>
      </div>
    );
  }
}
