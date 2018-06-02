import React, { Component } from "react";
import styles from "./App.scss";

import Header from "../../components/header/index";
import Filter from "../../components/filter/index";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Filter />
    </div>
  );
}