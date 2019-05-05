import React from "react";
import { Route, Switch } from "react-router-dom";
import EmployeeDetail from "./employee_detail";
import EmployeesList from "./employees_list";

const MainArea = () => (
  <Switch>
    <Route path="/employee/:id" component={EmployeeDetail} />
    <Route path="/" component={EmployeesList} />
  </Switch>
);

export default MainArea;
