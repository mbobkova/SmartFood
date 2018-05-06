import React, { Component } from "react";
import styles from "./Header.scss";
import Menu from "./menu/index";

import sn from "classnames";

export default class Header extends Component {
  state = {
    shown: false
  };

  toggle = () => {
    this.setState({
      shown: !this.state.shown
    });
  };

  render() {
    const body = document.querySelector("body");
    this.state.shown
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");

    return (
      <header className={styles.header}>
        <Menu show={this.state.shown} />
        <i
          className={sn("material-icons", styles["menu-icon"])}
          onClick={this.toggle}
        >
          menu
        </i>Header
        {this.state.shown && (
          <i
            className={sn("material-icons", styles["close-icon"])}
            onClick={this.toggle}
          >
            close
          </i>
        )}
      </header>
    );
  }
}
