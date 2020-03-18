import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductsList, ProductsInsert, ProductsUpdate } from "../pages/pages";

import NavBar from "../components/Navbar";

//import "bootstrap/dist/css/bootstrap.min.css";

function AdminApp() {
  return (
    <Router>
      <NavBar />
      <Route path="/admin/products">
        <Route path="/list" exact component={ProductsList} />
        <Route path="/create" exact component={ProductsInsert} />
        <Route path="/update/:id" exact component={ProductsUpdate} />
      </Route>
    </Router>
  );
}

export default AdminApp;
