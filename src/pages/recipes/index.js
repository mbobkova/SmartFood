import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { likeResipe, unlikeResipe } from "../../actions/productActions";
import axios from "axios";
import styles from "./Recipes.scss";

class Recipes extends Component {
  state = { data: [], term: "" };

  likeRecipe = (e, item) => {
    e.stopPropagation();
    if (!this.props.likedRecipes.includes(item)) {
      this.props.likeResipe(item);
    } else {
      this.props.unlikeResipe(item);
    }
  };
  componentDidMount() {
    axios.get("http://localhost:8080/dish").then(response =>
      this.setState({
        data: response.data
      })
    );
  }
  render() {
    const { term } = this.state;
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
        {this.state.data.map(item => (
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
              <p>{item.description}</p>
              <p>{item.calorificValue} Ккал</p>
              <p className={styles.recipes__description}>{item.recipe}</p>
            </div>
            {/* <i
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
            </i> */}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    likedRecipes: state.likedRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unlikeResipe: bindActionCreators(unlikeResipe, dispatch),
    likeResipe: bindActionCreators(likeResipe, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
