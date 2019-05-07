import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./styles/_font_icons.scss";
import "./styles/_animations.scss";
import Layout from "./containers/layout";
import * as serviceWorker from "./serviceWorker";

import Root from "./root";

ReactDOM.render(
  <Root>
    <Layout />
  </Root>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
