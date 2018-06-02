import React, { Component } from "react";

import styles from "./Menu.scss";

export default class Menu extends Component {

  render() {
    const { show } = this.props;

    return (
      show && (
        <div className={styles.overlay}>
          <div className={styles.menu}>
            <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <i className="material-icons">home</i>
                <span className={styles["menu__item-text"]}>
                  Главная
                </span>
              </li>
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
