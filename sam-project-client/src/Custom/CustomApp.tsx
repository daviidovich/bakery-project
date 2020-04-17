import React from "react";
import "../App.css";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Features from "../Section Features/Section Features";
import History from "../Section History/Section History";
import Catalog from "../Section Catalog copy/Section Catalog";
import Offers from "../Section Offers/Section Offers";
import Reviews from "../Section Reviews/Section Client-reviews";
import Yandex from "../Section Map/Section Map";
import Footer from "../Footer/Footer";

class CustomApp extends React.PureComponent {
  render() {
    return (
      <div className="CustomApp">
        <Navbar />
        <Banner />
        <Features />
        <History />
        <Catalog />
        <Offers />
        <Reviews />
        <Yandex />
      </div>
    );
  }
}

export default CustomApp;
