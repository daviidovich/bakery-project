import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

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
} from "./Admin/pages/pages";
import BasketPage from "./Basket/Basket";

ReactDOM.render(
  <App />,
  // <Router>
  //   <Route path="/" component={CustomApp}>
  //     {/* <IndexRoute component={IndexPage} /> */}

  //     <Route path="/basket" component={OpenedBasket}>
  //       {/* <Route path="/cart/checkout" component={CheckoutPage}/> */}
  //     </Route>

  //     <Route path="/admin" component={Authorization}></Route>

  //     <Route path="/admhome" component={AdminApp}>
  //       <Route path="/admhome/list" exact component={ProductsList} />
  //       <Route path="/admhome/create" exact component={ProductsInsert} />
  //       <Route path="/admhome/update/:id" exact component={ProductsUpdate} />
  //     </Route>

  //     {/* <Route path="/catalog/:itemId" component={CatalogItemPage} />

  //     <Route path="/orders/:itemId" component={OrderItemPage} /> */}
  //   </Route>
  // </Router>,
  document.getElementById("root")
);
