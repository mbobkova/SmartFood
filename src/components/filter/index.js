import React, { Component } from "react";
import styles from "./Filter.scss";

export default class Filter extends Component {
 

  render() {
    const groups = this.props.content;
    return (
      <div className={styles.filter}>
        <button className={styles.filter__tab}>
          All
        </button>
        {groups.map((item, index) => (
          <button key={index} className={styles.filter__tab}>
            {item.group}
          </button>
        ))}
      </div>
    );
  }
}
