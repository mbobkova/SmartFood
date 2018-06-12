import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { authorize } from "../../actions/productActions";
import { connect } from "react-redux";
import styles from "./Account.scss";
import axios from "axios";

class Account extends Component {
  state = { userName: "", password: "", authorized: false };
  setUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  setPassword = event => {
    this.setState(
      {
        password: event.target.value
      },
      () => {
        if (this.state.userName && this.state.password) {
          this.setState({
            authorized: true
          });
        } else {
          this.setState({
            authorized: false
          });
        }
      }
    );
  };

  authorize = () => {
    if (this.state.userName && this.state.password) {
      const config = {
        params: { userName: this.state.userName }
      };
      axios
        .get("http://localhost:8080/user", config, {
          headers: {
            Authorization:
              "Basic " + btoa(this.state.userName + ":" + this.state.password),
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          if (response.data !== "") {
            this.props.authorize()
          } else {
            alert(
              "Такого пользователя не найдено. Проверьте пароль и логин, чтобы зайти в аккаунт"
            );
          }
        })
    } else {
      alert("Заполните поля");
    }
  };

  render() {
    const { userName, password, authorized } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.form__username}>
          <span className={styles.form__text}>Логин: </span>
          <input
            className={styles.form__input}
            type="text"
            name="login"
            onChange={this.setUserName}
            value={userName}
          />
        </div>
        <div className={styles.form__password}>
          <span className={styles.form__text}>Пароль: </span>
          <input
            className={styles.form__input}
            type="text"
            name="password"
            onChange={this.setPassword}
            value={password}
          />
        </div>
        {authorized ? (
          <Link to="/home">
            <button className={styles.form__btn} onClick={this.authorize}>
              Войти
            </button>
          </Link>
        ) : (
          <button className={styles.form__btn} onClick={this.authorize}>
            Войти
          </button>
        )}
        <Link to="/registration">
          <p className={styles["form__text-for-registration"]}>
            Еще не зарегистрировались?
          </p>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);
