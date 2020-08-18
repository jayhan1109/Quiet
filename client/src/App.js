import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Fragment>
  );
};

export default App;
