import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import CustomApp from "./Custom/CustomApp";
import Authorization from "./Admin/components/authorization";
import AdminApp from "./Admin/app/App";
import {
  ProductsList,
  ProductsInsert,
  ProductsUpdate,
  OrdersList,
} from "./Admin/pages/pages";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Features from "./Section Features/Section Features";
import History from "./Section History/Section History";
import Catalog from "./Section Catalog copy/Section Catalog";
import Offers from "./Section Offers/Section Offers";
import Reviews from "./Section Reviews/Section Client-reviews";
import Yandex from "./Section Map/Section Map";
import Footer from "./Footer/Footer";
import BasketPage from "./Basket/BasketPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
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

          <Route path="/admin" exact component={Authorization} />

          <Route path="/admhome" exact component={AdminApp}></Route>
          <Route path="/admhome/list" exact component={ProductsList} />
          <Route path="/admhome/create" exact component={ProductsInsert} />
          <Route path="/admhome/update/:id" exact component={ProductsUpdate} />
          <Route path="/admhome/orders" exact component={OrdersList} />
        </div>
      </Router>
    );
  }
}

export default App;
