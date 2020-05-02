import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import Authorization from "./Admin/components/authorization";
import {
  ProductsList,
  ProductsInsert,
  ProductsUpdate,
  OrdersList,
} from "./Admin/pages/pages";
import "./Admin/app/AdminApp.scss"
import NavBar from "./Admin/components/Navbar";
import HeaderAdmin from "./Admin/components/Header";

import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Features from "./Section Features/Section Features";
import History from "./Section History/Section History";
import Catalog from "./Section Catalog/Section Catalog";
import Offers from "./Section Offers/Section Offers";
import Reviews from "./Section Reviews/Section Client-reviews";
import Yandex from "./Section Map/Section Map";
import Footer from "./Footer/Footer";
import BasketPage from "./Basket/BasketPage";

interface myState {
  itemsLS: Array<Object>;
}

class App extends React.Component<{}, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      itemsLS: [],
    };
  }
  stateRise = (arr: Array<Object>) => {
    this.setState({
      itemsLS: arr,
    });
    console.log("rising state", arr);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <Header itemsFromRise={this.state.itemsLS} />
            <Navbar />
            <Banner />
            <Features />
            <History />
            <Catalog stateRise={this.stateRise} />
            <Offers />
            <Reviews />
            <Yandex />
            <Footer />
          </Route>

          <Route path="/basket">
            <Header itemsFromRise={this.state.itemsLS} />
            <BasketPage />
            <Footer />
          </Route>

          <Route path="/admin" exact component={Authorization} />

          <Route path="/admhome">
          <HeaderAdmin />
            <div className="admin-app-content">
              <NavBar />
              <main>
                <div className="main-content">
                  <Switch>
                    <Route exact path="/admhome">
                      <h2 className="color-brown text-center">
                        Welcome, administrator!
                      </h2>
                    </Route>
                    <Route
                      path="/admhome/list"
                      exact
                      component={ProductsList}
                    />
                    <Route
                      path="/admhome/create"
                      exact
                      component={ProductsInsert}
                    />
                    <Route
                      path="/admhome/update/:id"
                      exact
                      component={ProductsUpdate}
                    />
                    <Route
                      path="/admhome/orders"
                      exact
                      component={OrdersList}
                    />
                  </Switch>
                </div>
              </main>
            </div>
          </Route>

        </div>
      </Router>
    );
  }
}

export default App;
