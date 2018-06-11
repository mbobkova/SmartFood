import React, { Component } from "react";
import axios from "axios";
import styles from "./Registration.scss";

export default class Registration extends Component {
  state = { userName: "", password: "", passwordRepeat: "" };
  setUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  repeatPassword = event => {
    this.setState({
      passwordRepeat: event.target.value
    });
  };

  registrate = () => {
    if (!this.state.userName) {
      console.log("no username");
    } else if (!this.state.password || !this.state.passwordRepeat) {
      console.log("no password");
    } else if (this.state.password !== this.state.passwordRepeat) {
      console.log("incorrect password");
    } else {
      axios.post(
        "http://localhost:8080/user",
        {
          userName: this.state.userName,
          password: this.state.password
        }
      );
    }
  };

  render() {
    const { userName, password, passwordRepeat } = this.state;

    return (
      <div className={styles.registration}>
        <div className={styles.registration__username}>
          <span className={styles.registration__text}>Логин: </span>
          <input
            className={styles.registration__input}
            type="text"
            name="login"
            onChange={this.setUserName}
            value={userName}
          />
        </div>
        <div className={styles.registration__password}>
          <span className={styles.registration__text}>Пароль: </span>
          <input
            className={styles.registration__input}
            type="text"
            name="password"
            onChange={this.setPassword}
            value={password}
          />
        </div>
        <div className={styles["registration__password-again"]}>
          <span className={styles.registration__text}>Повторите пароль: </span>
          <input
            className={styles.registration__input}
            type="text"
            name="password"
            onChange={this.repeatPassword}
            value={passwordRepeat}
          />
        </div>
        <button className={styles.registration__btn} onClick={this.registrate}>
          Зарегистрироваться
        </button>
      </div>
    );
  }
}
