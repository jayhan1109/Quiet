import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import "./App.module.scss";
import Register from "./components/login/Register";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  );
};

export default App;
