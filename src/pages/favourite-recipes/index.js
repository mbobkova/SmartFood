import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./FavouriteRecipes.scss";
import { unlikeRecipe } from "../../actions/productActions";
import sn from "classnames";

class FavouriteRecipes extends Component {
  unlikeRecipe = (e, item) => {
    e.stopPropagation();
    this.props.unlikeRecipe(item);
  };

  render() {
    const { likedRecipes, recipesList, allRecipes } = this.props;
    const recipes = !!allRecipes.length ? allRecipes : recipesList;
    return (
      <div className={styles["favourite-recipes"]}>
        {recipes.map((item, i) =>
          likedRecipes.map(
            (ricepe, i) =>
              ricepe === item.name ? (
                <div className={styles["favourite-recipes__item"]}>
                  <div
                    className={styles["favourite-recipes__image"]}
                    style={{
                      backgroundImage: `url(${item.media})`
                    }}
                  />
                  <div className={styles["favourite-recipes__info"]}>
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
                      likedRecipes.includes(item.name) &&
                        styles["icon--selected"]
                    )}
                    onClick={e => {
                      this.unlikeRecipe(e, item.name);
                    }}
                  >
                    star
                  </i>
                </div>
              ) : null
          )
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    likedRecipes: state.likedRecipes,
    recipesList: state.recipesList,
    allRecipes: state.allRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unlikeRecipe: bindActionCreators(unlikeRecipe, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipes);
