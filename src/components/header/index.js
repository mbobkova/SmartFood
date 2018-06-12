import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import styles from "./Header.scss";
import {saveRecipes} from "../../actions/productActions";
import { resetChoise } from "../../actions/productActions";

import sn from "classnames";

class Header extends Component {
  getRecipe = () => {
    const stringParams = this.props.selectedProducts.join();
    const config = {
      params: {'ingredientsTitle': stringParams},
    };
    axios
      .get("http://localhost:8080/dish", config)
      .then(response => this.props.saveRecipes(response.data))
      .catch(alert('Рецептов сзаданными продуктами не найдено. Попробуйте изменить своы выбор'))
  };

  reset = () => {
    this.props.resetChoise();
  };

  render() {
    return (
      <header className={styles.header}>
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
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedProducts: state.selectedProducts,
    recipesList: state.recipesList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetChoise: bindActionCreators(resetChoise, dispatch),
    saveRecipes: bindActionCreators(saveRecipes, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
