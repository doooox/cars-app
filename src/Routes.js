import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCars from "./pages/AppCars";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/cars">
          <AppCars />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
