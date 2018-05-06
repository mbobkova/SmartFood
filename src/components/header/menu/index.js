import React, { Component } from "react";
import sn from "classnames";

import styles from "./Menu.scss";

export default class Menu extends Component {

  render() {
    const { show } = this.props;

    return (
      show && (
        <div className={styles.overlay}>
          <div className={styles.menu}>
            
            {/* <img
              className={styles.menu__image}
              src="https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            /> */}
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <i className="material-icons">star</i>
                <span className={styles["menu__item-text"]}>
                  Избранные рецепты
                </span>
              </li>
              <li className={styles.menu__item}>
                <i className="material-icons">favorite</i>
                <span className={styles["menu__item-text"]}>
                  Избранные ингредиенты
                </span>
              </li>
              <li className={styles.menu__item}>
                <i className="material-icons">view_module</i>
                <span className={styles["menu__item-text"]}>
                  Категории рецептов
                </span>
              </li>
              <li className={styles.menu__item}>
                <i className="material-icons">list</i>
                <span className={styles["menu__item-text"]}>
                  Список рецептов
                </span>
              </li>
              <li className={styles.menu__item}>
                <i className="material-icons">delete</i>
                <span className={styles["menu__item-text"]}>Стоп-лист</span>
              </li>
              <li className={styles.menu__item}>
                <i className="material-icons">alarm</i>
                <span className={styles["menu__item-text"]}>Время готовки</span>
              </li>
            </ul>
          </div>
        </div>
      )
    );
  }
}
