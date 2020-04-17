import React, { Component } from "react";

import Logo from "../../Logo/Logo";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content flex-center">
          <Logo />
          <ul className="nav-items flex-center">
            <li className="nav-item text">
              <Link to="/admhome/list" className="nav-link">
                Products list
              </Link>
            </li>
            <li className="nav-item text">
              <Link to="/admhome/create" className="nav-link">
                Create Product
              </Link>
            </li>

            <li className="nav-item text">
              <Link to="/admhome/orders" className="nav-link">
                Orders List
              </Link>
            </li>
            {/* <li className="nav-item text">
              <Link to="/admhome/update/:id" className="nav-link">
                Update Product
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
