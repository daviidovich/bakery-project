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

class AdminApp extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/admin">
          <Header />
          <div className="admin-app-content">
            <NavBar />
            <main>
              <div className="main-content">
                <Switch>
                  <Route exact path="/admin">
                    <h2 className="color-brown text-center">
                      Welcome, administrator!
                    </h2>
                  </Route>
                  <Route path="/admin/list" exact component={ProductsList} />
                  <Route
                    path="/admin/create"
                    exact
                    component={ProductsInsert}
                  />
                  <Route
                    path="/admin/update/:id"
                    exact
                    component={ProductsUpdate}
                  />
                  <Route path="/admin/orders" exact component={OrdersList} />
                </Switch>
              </div>
            </main>
          </div>
        </Route>
      </Router>
    );
  }
}

export default AdminApp;
