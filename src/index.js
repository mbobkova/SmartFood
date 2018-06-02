import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App/index";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

import "./index.scss";

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
