import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AdminApp from "./Admin/app/App";
import Authorization from "./Admin/components/authorization";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/admin" exact component={Authorization} />
      <Route path="/admin/home" exact component={AdminApp} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
