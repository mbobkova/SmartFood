import React, { Component } from "react";
import axios from "axios";
import { bindActionCreators } from "redux";
import { authorize } from "../../actions/productActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Registration.scss";

class Registration extends Component {
  state = { userName: "", password: "", passwordRepeat: "", authorized: false };
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
    this.setState(
      {
        passwordRepeat: event.target.value
      },
      () => {
        if (
          this.state.userName &&
          this.state.password &&
          this.state.password === this.state.passwordRepeat
        ) {
          this.setState({ authorized: true });
        } else {
          this.setState({ authorized: false });
        }
      }
    );
  };

  registrate = () => {
    if (!this.state.userName) {
      alert("Введите логин");
    }
    else if (!this.state.password || !this.state.passwordRepeat) {
     alert("Введите пароль");
    }
    else if (this.state.password !== this.state.passwordRepeat) {
      alert("Неверный пароль");
    } else {
      axios
        .post("http://localhost:8080/user", {
          userName: this.state.userName,
          password: this.state.password
        })
        .then(() => {
          this.props.authorize();
        });
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
        {this.state.authorized ? (
          <Link to="/home">
            <button
              className={styles.registration__btn}
              onClick={this.registrate}
            >
              Зарегистрироваться
            </button>
          </Link>
        ) : (
          <button
            className={styles.registration__btn}
            onClick={this.registrate}
          >
            Зарегистрироваться
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authorized: state.authorized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authorize: bindActionCreators(authorize, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
