import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPages } from "../Components/MainPages/MainPages";
import { Details } from "../Components/Details/Details";

export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPages} />
      <Route exact path="/Details" component={Details} />
    </Switch>
  );
};
