import React from "react";
import { Route } from "react-router-dom";

// class AppRoute extends Route(config = {
//   component: Component,
//   layout: Layout,
//   ...rest,
// }) {
class AppRoute extends Route {
  constructor({ component: Component, layout: Layout, ...rest }) {
    this.Layout =
      Layout === undefined ? (props) => <>{props.children}</> : Layout;
    this.Component = Component;
    this.rest = rest;
  }

  render() {
    return (
      <Route
        {...this.rest}
        render={(props) => (
          <this.Layout>
            <this.Component {...props} />
          </this.Layout>
        )}
      />
    );
  }
}

export default AppRoute;
