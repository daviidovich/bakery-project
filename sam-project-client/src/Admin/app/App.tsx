import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductsList, ProductsInsert, ProductsUpdate } from "../pages/pages";
import "./App.scss";

import NavBar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

class AdminApp extends React.Component {
  render() {
    return (
      <div id="AdminApp">
        <Router>
          <NavBar />
          <Switch>
            <Route
              path="/admhome/products/list"
              exact
              component={ProductsList}
            />
            <Route
              path="/admhome/products/create"
              exact
              component={ProductsInsert}
            />
            <Route
              path="/admhome/products/update/:id"
              exact
              component={ProductsUpdate}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AdminApp;
