import React from "react";
import ReactDOM from "react-dom";
import "./styles/_global.scss";
import "./styles/_font_icons.scss";
import "./styles/_animations.scss";
import "./styles/_overwritten.scss";
import EmployeesList from "./containers/employees_list";
import * as serviceWorker from "./serviceWorker";

import Root from "./root";

ReactDOM.render(
  <Root>
    <EmployeesList />
  </Root>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
