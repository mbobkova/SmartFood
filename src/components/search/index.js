import React, { Component } from "react";
import styles from "./Search.scss";

export default class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <input className={styles.search__input} placeholder='search product...'/>
      </div>
    );
  }
}
