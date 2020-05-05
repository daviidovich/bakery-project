import React from "react";
import "./Header.css";

import { PhoneIcon, MapIcon, ClockIcon } from "../Another/Icons";

import Logo from "../Logo/Logo";
import BasketIcon from "../Basket/BasketIcon";

class Header extends React.Component{
  render() {
    return (
      <header className="header" id="header">
        <div className="header-content flex-space-between">
          <div className="header-info">
            <div className="header-info__phone text">
              {PhoneIcon} +99 546 584 26
            </div>
            <div className="header-info__address text">
              {MapIcon} 16122 Collins Street, Australia
            </div>
          </div>
          <Logo />
          <div className="header-info">
            <div className="header-info__workTime border-right text">
              {ClockIcon} 08:00 am - 08:30 pm
            </div>
            <BasketIcon
              model={"basket"}
              updateState={this.props.updateState}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
