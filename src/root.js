import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import reducers from "./reducers";
import { createBrowserHistory } from "history";
import ErrorBoundary from "./containers/error_boundary";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default props => {
  const history = createBrowserHistory();

  const store = applyMiddleware(ReduxPromise, thunk)(createStore);

  return (
    <Provider
      store={store(
        //reducers
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__({
            trace: true
          })
      )}
    >
      <Router history={history}>
        <ErrorBoundary>{props.children}</ErrorBoundary>
      </Router>
    </Provider>
  );
};
