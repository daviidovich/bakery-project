import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav flex-center" id="navbar">
        <ul className="nav-items flex-center">
          <NavLink to="header" title="HOME" offset={-70} />
          <NavLink to="history" title="ABOUT US" offset={90} />
          <NavLink to="features" title="PRODUCT" offset={-50} />
          <NavLink to="catalog" title="SHOP" offset={0} />
          <NavLink to="offers" title="ELEMENT" offset={0} />
          <NavLink to="reviews" title="BLOG" offset={-70} />
          <NavLink to="footer" title="CONTACT" offset={-70} />
        </ul>
      </nav>
    );
  }
}

function NavLink(props: { to: any; title: String; offset: number }) {
  return (
    <li className="nav-item text">
      <Link
        className="nav-link "
        activeClass="nav-link-active"
        to={props.to}
        spy={true}
        smooth={true}
        offset={props.offset}
        duration={500}
      >
        {props.title}
      </Link>
    </li>
  );
}

export default Navbar;
