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
import BasketPage from "./Basket/Basket";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route path="/" exact component={CustomApp} />
            <Route path="/basket" exact component={BasketPage} />
            <Route path="/admin" exact component={Authorization} />
            <Route path="/admhome" exact component={AdminApp}></Route>
            <Route path="/admhome/list" exact component={ProductsList} />
            <Route path="/admhome/create" exact component={ProductsInsert} />
            <Route
              path="/admhome/update/:id"
              exact
              component={ProductsUpdate}
            />
            <Route path="/admhome/orders" exact component={OrdersList} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
