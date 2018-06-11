import React, { Component } from "react";
import styles from "./Navigation.scss";
import { Link } from "react-router-dom";
import sn from "classnames";

export default function Navigation() {
  return (
    <ul className={styles.menu__list}>
      <li className={styles.menu__item}>
        <i
          className={sn("material-icons", "menu-icon")}
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
        <i className={sn("material-icons", "menu-icon")}>star</i>
        <Link to="/favourite-recipes">
          <span className={styles["menu__item-text"]}>Избранные рецепты</span>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <i className={sn("material-icons", "menu-icon")}>favorite</i>
        <Link to="/favourite-products">
          <span className={styles["menu__item-text"]}>
            Избранные ингредиенты
          </span>
        </Link>
      </li>

      <li className={styles.menu__item}>
        <i className={sn("material-icons", "menu-icon")}>list</i>
        <Link to="/recipes">
          <span className={styles["menu__item-text"]}>Список рецептов</span>
        </Link>
      </li>

      <li className={styles.menu__item}>
        <i className="material-icons">person</i>
        <Link to="/account">
          <span className={styles["menu__item-text"]}>Войти в аккаунт</span>
        </Link>
      </li>
    </ul>
  );
}
