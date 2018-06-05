import React, { Component } from "react";
import styles from "./App.scss";

import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "../../components/header/index";
import Filter from "../../components/filter/index";
import Main from "../../pages/main/index";
import FavouriteProducts from "../../pages/favourite-products/index";
import FavouriteRecipes from "../../pages/favourite-recipes/index";
const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <div className={styles.wrapper}>
        <div>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <i
                className="material-icons"
                onClick={() => {
                  this.state({ shown: true });
                }}
              >
                home
              </i>
              <Link to="/home">
                <span className={styles["menu__item-text"]}>Главная</span>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <i className="material-icons">star</i>
              <Link to="/favourite-recipes">
                <span className={styles["menu__item-text"]}>
                  Избранные рецепты
                </span>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <i className="material-icons">favorite</i>
              <Link to="/favourite-products">
                <span className={styles["menu__item-text"]}>
                  Избранные ингредиенты
                </span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <i className="material-icons">list</i>
              <Link to="/recipes-list">
                <span className={styles["menu__item-text"]}>
                  Список рецептов
                </span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <i className="material-icons">alarm</i>
              <span className={styles["menu__item-text"]}>Время готовки</span>
            </li>
          </ul>
          <Route path="/home" component={Main} />
          <Route path="/favourite-products" component={FavouriteProducts} />
          <Route path="/favourite-recipes" component={FavouriteRecipes} />        
        </div>
      </div>
    </Router>
  );
}
