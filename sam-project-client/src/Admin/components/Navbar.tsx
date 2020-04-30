import React, { Component } from "react";
import "../style/components.scss";
import { Link } from "react-router-dom";
import { ListIcon, Plus, Check } from "../../Another/Icons";

class NavBar extends Component {
  render() {
    return (
      <aside className="sidebar flex-colomn" id="navbar">
        <ul className="sidebar-items">
          <li className="sidebar-item text">
            <Link to="/admhome/list" className="sidebar-link">
              {ListIcon} Products list
            </Link>
          </li>
          <li className="sidebar-item text">
            <Link to="/admhome/create" className="sidebar-link">
              {Plus} Create Product
            </Link>
          </li>

          <li className="sidebar-item text">
            <Link to="/admhome/orders" className="sidebar-link">
              {Check} Orders List
            </Link>
          </li>

          {/* <li className="sidebar-item text  color-white">
              <Link to="/admhome/update/:id" className="sidebar-link">
                Update Product
              </Link>
            </li> */}
        </ul>
      </aside>
    );
  }
}

export default NavBar;
