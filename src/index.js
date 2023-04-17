import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/examples/Index_old.js";
import HomePage from "views/HomePage.js";
import WhatIsCI from "views/tabs/WhatIsCI.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route path="/" render={(props) => <HomePage {...props} />} />
      <Route
        path="/what-is-carbon-intensity"
        render={(props) => <WhatIsCI {...props} />}
      />
    </Switch>
  </BrowserRouter>
);
