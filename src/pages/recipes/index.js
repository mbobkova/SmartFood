import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  likeRecipe,
  unlikeRecipe,
  saveAllRecipes
} from "../../actions/productActions";
import axios from "axios";
import sn from "classnames";

import styles from "./Recipes.scss";

class Recipes extends Component {
  state = { term: "" };

  likeRecipe = (e, item) => {
    e.stopPropagation();
    if (!this.props.likedRecipes.includes(item)) {
      this.props.likeRecipe(item);
    } else {
      this.props.unlikeRecipe(item);
    }
  };

  searchingFor = term => {
    return function(x) {
      return x.name.toUpperCase().includes(term.toUpperCase());
    };
  };

  searchHeandler = event => {
    this.setState({
      term: event.target.value
    });
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/dish")
      .then(response => this.props.saveAllRecipes(response.data));
  }
  render() {
    const { term } = this.state;
    console.log(this.props.allRecipes);
    return (
      <div className={styles.recipes}>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            placeholder="search product..."
            onChange={this.searchHeandler}
            value={term}
          />
        </div>
        {this.props.allRecipes.filter(this.searchingFor(term)).map(item => (
          <div className={styles.recipes__item}>
            <div
              className={styles.recipes__image}
              style={{
                backgroundImage: `url(${item.media})`
              }}
            />
            <div className={styles.recipes__info}>
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>Состав: {item.ingredientsTitleRu.join(", ")}</p>
              <p>{item.description}</p>
              <p>{item.calorificValue} Ккал</p>
              <p className={styles.recipes__description}>{item.recipe}</p>
            </div>
            <i
              className={sn(
                "material-icons",
                styles["star-icon"],
                this.props.likedRecipes.includes(item.name) &&
                  styles["icon--selected"]
              )}
              onClick={e => {
                this.likeRecipe(e, item.name);
              }}
            >
              star
            </i>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    likedRecipes: state.likedRecipes,
    allRecipes: state.allRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    likeRecipe: bindActionCreators(likeRecipe, dispatch),
    unlikeRecipe: bindActionCreators(unlikeRecipe, dispatch),
    saveAllRecipes: bindActionCreators(saveAllRecipes, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
