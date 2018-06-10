import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./FavouriteRecipes.scss";
import { unlikeResipe } from "../../actions/productActions";
import sn from "classnames";

class FavouriteRecipes extends Component {
  unlikeResipe = (e, item) => {
    e.stopPropagation();
    this.props.unlikeResipe(item);
  };

  render() {
    const { likedRecipes, recipesList } = this.props;
    return (
      <div className={styles["favourite-recipes"]}>
        {recipesList.map((item, i) =>
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
                      this.unlikeResipe(e, item.name);
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
    recipesList: state.recipesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unlikeResipe: bindActionCreators(unlikeResipe, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRecipes);
