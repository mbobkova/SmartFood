import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App/index";
import FavouriteProducts from "./pages/favourite-products/index";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import { Router, IndexRoute } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./index.scss";

const store = configureStore();
const history = createBrowserHistory();

render(
  <Provider store={store}>
    {/* <Router history={history}>
      <Route path={"/"} component={App}>
        <Route path={"/favourite-products"} component={FavouriteProducts} />
      </Route>
    </Router> */}
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
