import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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
import BasketPage from "../Basket/BasketPage";

class CustomApp extends React.PureComponent {
  render() {
    return (
      <div className="CustomApp">
        <Route path="/">
          <Header />
          <Navbar />
          <Banner />
          <Features />
          <History />
          <Catalog />
          <Offers />
          <Reviews />
          <Yandex />
          <Footer />
        </Route>

        <Route path="/basket">
          <Header />
          <BasketPage />
          <Footer />
        </Route>
      </div>
    );
  }
}

export default CustomApp;
