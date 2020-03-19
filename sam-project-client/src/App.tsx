import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Authorization from "./Admin/components/authorization";
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

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {/* <Router>
          <Route path="/admin" exact component={Authorization} />
        </Router> */}
        <div className="App">
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
        </div>
      </div>
    );
  }
}

export default App;
