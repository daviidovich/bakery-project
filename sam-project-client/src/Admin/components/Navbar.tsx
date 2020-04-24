import React, { Component } from "react";
import "../style/components.scss";
import { Link } from "react-router-dom";
import { ListIcon, Plus, Check, Dollar } from "../../Another/Icons";

class NavBar extends Component {
  render() {
    return (
      <aside className="sidebar" id="navbar">
        <div className="sidebar-content flex-colomn">
          <ul className="sidebar-items">
            <li className="sidebar-item text ">
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

            <li className="sidebar-item text ">
              <Link to="/admhome/completed" className="sidebar-link">
                {Dollar} Completed Orders
              </Link>
            </li>
            {/* <li className="sidebar-item text  color-white">
              <Link to="/admhome/update/:id" className="sidebar-link">
                Update Product
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
    );
  }
}

export default NavBar;
