import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RechargeFeed from "./Pages/RechargeFeed";
import VoucherListing from "./Pages/VoucherListing";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
      <Route path="/recharge-feed" component={RechargeFeed} />
      <Route path="/voucher-listing" component={VoucherListing} />      
    </Switch>
  </BrowserRouter>
);

export default Router;
