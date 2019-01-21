import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home/HomePage";
import Game from "./containers/Game/GamePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </Switch>
  );
};

export default Routes;
