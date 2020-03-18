import React from "react";
import "./Footer.css";

import Logo from "../Logo/Logo";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-content flex-space-between">
          <div className="footer__col-1">
            <Logo />
            <div className="text text-center">
              PO Box 16122 Collins Street, Victoria 8007 Australia.
              <br /> (+84) 7534 9773, (+83) 874 548
            </div>
          </div>
          <div className="footer__col-2">
            <h3 className="footer-title color-brown">Information</h3>
            <div className="footer__col-2-links flex-space-between">
              <div>
                <a href="">About us</a>
                <br />
                <a href="">Check out</a>
                <br />
                <a href="">Contact</a>
                <br />
                <a href="">Service</a>
                <br />
                <a href="">Check out</a>
              </div>
              <div>
                <a href="">My account</a>
                <br />
                <a href="">Contact</a>
                <br />
                <a href="">Shopping cart</a>
                <br />
                <a href="">Shop</a>
                <br />
                <a href="">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer__col-3">
            <h3 className="footer-title color-brown">Opening Time</h3>
            <div className="text">
              Lorem ipsum dolor sit met consectetur adipisicing elit, sed do
              eiusmod
            </div>
            <br />
            <div className="text">
              Mon - Fri: 08:00 am - 08:30 pm
              <br />
              Sat - Sun: 10:00 am - 16:30 pm
            </div>
          </div>
        </div>
        <div className="footer-copyrights text flex-center">
          Copyright ©2019 - All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
