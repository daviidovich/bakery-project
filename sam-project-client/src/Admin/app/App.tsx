import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ProductsList,
  ProductsInsert,
  ProductsUpdate,
  OrdersList,
} from "../pages/pages";
import "./App.scss";
import NavBar from "../components/Navbar";
import Header from "../components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class AdminApp extends React.Component {
  render() {
    return (
      <div id="admin-app">
        <Router>
          <Route path="/admhome">
            <Header />
            <div className="admin-app-content">
              <NavBar />
              <main>
                <div className="main-content">
                  <Switch>
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
        </Router>
      </div>
    );
  }
}

export default AdminApp;
