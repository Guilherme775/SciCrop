import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Station from "./pages/Station";
import Detail from "./pages/Detail";
import Select from "./pages/Select";
import Weather from "./pages/Weather";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/station" component={Station} />
        <Route path="/detail" component={Detail} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
