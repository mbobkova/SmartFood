import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import sn from "classnames";

import * as actions from "../../actions/productActions";
import Search from "../search/index";
import styles from "./Content.scss";

class Content extends Component {
  state = { selected: [], liked: [], term: "" };

  selectProduct = item => {
    if (!this.props.selectedProducts.includes(item)) {

      this.props.actions.addProduct(item);
    } else {

      this.props.actions.deleteProduct(item);
    }
  };

  likeProduct = (e, item) => {
    e.stopPropagation();
    if (!this.props.likedProducts.includes(item)) {

      this.props.actions.likeProduct(item);
    } else {

      this.props.actions.unlikeProduct(item);
    }
  };

  likeRecipe = (e, item) => {
    e.stopPropagation();
    if (!this.props.likedRecipes.includes(item)) {
      this.props.actions.likeResipe(item);
    } else {
      this.props.actions.unlikeResipe(item);
    }
  };

  searchingFor = term => {
    return function(x) {
      return x.title.toUpperCase().includes(term.toUpperCase()) || !term;
    };
  };

  searchHeandler = event => {
    this.setState({
      term: event.target.value
    });
  };

  render() {
    const groups = this.props.content;
    const addProduct = this.props.actions;
    const { term } = this.state;
    const recipesList = this.props.recipesList;

    console.log(this.props);
    return this.props.recipesList.length ? (
      <div className={styles.recipesList}>
        {recipesList.map((item, i) => {
          return (
            <div className={styles.recipesList__item}>
              <div
                className={styles.recipesList__image}
                style={{
                  backgroundImage: `url(http://podrobnosti.ua/media/pictures/2017/12/12/thumbs/740x415/foto-iz-otkrytyh-istochnikov_rect_2fe7719437679820ac4d9c9c0c65c19c.jpg)`
                }}
              />
              <div className={styles.recipesList__info}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.energyValue}</p>
                <p>{item.calorificValue}</p>
                <p>{item.recipe}</p>
              </div>
              <i
                className={sn(
                  "material-icons",
                  "star-icon",
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
          );
        })}
      </div>
    ) : (
      <div>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            placeholder="search product..."
            onChange={this.searchHeandler}
            value={term}
          />
        </div>
        {groups.length > 1 ? (
          <div className={styles.content}>
            {groups.map(group =>
              group.items.filter(this.searchingFor(term)).map((item, index) => {
                return (
                  <div className={styles.content__item} key={index}>
                    <div
                      className={sn(
                        styles["content__item-padding"],
                        this.props.selectedProducts.includes(item.titleEn) &&
                          styles["content__item--selected"]
                      )}
                      style={{ backgroundImage: `url(${item.media})` }}
                      onClick={() => this.selectProduct(item.titleEn)}
                    >
                      <div className={styles.content__icons}>
                        <i
                          className={sn(
                            "material-icons",
                            this.props.likedProducts.includes(item.title) &&
                              styles["icon--selected"]
                          )}
                          onClick={e => {
                            this.likeProduct(e, item.title);
                          }}
                        >
                          favorite
                        </i>
                      </div>
                      <div
                        className={sn(
                          styles["content__item-title"],
                          this.props.selectedProducts.includes(item.titleEn) &&
                            styles["content__item-title--selected"]
                        )}
                      >
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className={styles.content}>
            {groups.items.filter(this.searchingFor(term)).map((item, index) => (
              <div className={styles.content__item} key={index}>
                <div
                  className={sn(
                    styles["content__item-padding"],
                    this.props.selectedProducts.includes(item.titleEn) &&
                      styles["content__item--selected"]
                  )}
                  style={{ backgroundImage: `url(${item.media})` }}
                  onClick={() => this.selectProduct(item.titleEn)}
                >
                  <div className={styles.content__icons}>
                    <i
                      className={sn(
                        "material-icons",
                        this.props.likedProducts.includes(item.title) &&
                          styles["icon--selected"]
                      )}
                      onClick={e => {
                        this.like(e, item.title);
                      }}
                    >
                      favorite
                    </i>
                  </div>
                  <div
                    className={sn(
                      styles["content__item-title"],
                      this.props.selectedProducts.includes(item.titleEn) &&
                        styles["content__item-title--selected"]
                    )}
                  >
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    selectedProducts: state.selectedProducts,
    likedProducts: state.likedProducts,
    recipesList: state.recipesList,
    likedRecipes: state.likedRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
