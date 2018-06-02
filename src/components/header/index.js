import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import styles from "./Header.scss";
import Menu from "./menu/index";

import { resetChoise } from "../../actions/productActions";

import sn from "classnames";

class Header extends Component {
  state = {
    shown: false
  };

  toggle = () => {
    this.setState({
      shown: !this.state.shown
    });
  };

  reset = () => {
    this.props.resetChoise();
  };

  render() {
    const body = document.querySelector("body");
    this.state.shown
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");

    console.log(this.props.selectedProducts);

    return (
      <header className={styles.header}>
        <Menu show={this.state.shown} />
        <i
          className={sn("material-icons", styles["menu-icon"])}
          onClick={this.toggle}
        >
          menu
        </i>
        {this.props.selectedProducts.length ? (
          <div className={styles.header__title}>
            <span className={styles["header__title-text"]}>
              Выбрано {this.props.selectedProducts.length} продукта(ов)
            </span>
            <i
              className={sn("material-icons", styles["undone-icon"])}
              onClick={this.reset}
            >
              close
            </i>
            <i
              className={sn("material-icons", styles["done-icon"])}
              onClick={this.getRecipe}
            >
              done
            </i>
          </div>
        ) : (
          <span className={styles.header__title}>Выберете продукты</span>
        )}

        {this.state.shown && (
          <div className={styles["header__close-btn"]}>
            <i
              className={sn("material-icons", styles["close-icon"])}
              onClick={this.toggle}
            >
              close
            </i>
          </div>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedProducts: state.selectedProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetChoise: bindActionCreators(resetChoise, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
