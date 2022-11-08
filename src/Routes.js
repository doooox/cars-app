import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCars from "./pages/AddCars";
import AppCars from "./pages/AppCars";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/cars">
          <AppCars />
        </Route>
        <Route path="/add">
          <AddCars />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
