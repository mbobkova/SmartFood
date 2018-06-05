import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "../../../containers/App/index";
import FavouriteProducts from '../../../pages/favourite-products/index'

import styles from "./Menu.scss";

const history = createBrowserHistory();
export default class Menu extends Component {
  state = { shown: false };
  render() {
    const { show } = this.props;
    const { shown } = this.state;
    return (
      show && (
        <BrowserRouter history={history}>
          <div className={styles.overlay}>
            <div className={styles.menu}>
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
                  <Link to="/">
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
                  <span className={styles["menu__item-text"]}>
                    Время готовки
                  </span>
                </li>
              </ul>
              {/* <Route path="/" component={App} /> */}
            </div>
          </div>
        </BrowserRouter>
      )
    );
  }
}
