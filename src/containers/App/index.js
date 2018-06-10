import React, { Component } from "react";

import {  Route, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Navigation from "../../components/navigation/index";
import Main from "../../pages/main/index";
import FavouriteProducts from "../../pages/favourite-products/index";
import FavouriteRecipes from "../../pages/favourite-recipes/index";
import Recipes from '../../pages/recipes/index'
const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Navigation />
        <Route path="/home" component={Main} />
        <Route path="/favourite-products" component={FavouriteProducts} />
        <Route path="/favourite-recipes" component={FavouriteRecipes} />
        <Route path="/recipes" component={Recipes} />
      </div>
    </Router>
  );
}
