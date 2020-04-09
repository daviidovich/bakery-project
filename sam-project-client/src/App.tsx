import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import CustomApp from "./Custom/CustomApp";
import Authorization from "./Admin/components/authorization";
import AdminApp from "./Admin/app/App";
import {
  ProductsList,
  ProductsInsert,
  ProductsUpdate
} from "./Admin/pages/pages";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={CustomApp} />
            <Route path="/admin">
              <Authorization />
            </Route>
            <Route path="/admhome" exact component={AdminApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
