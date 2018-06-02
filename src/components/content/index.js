import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import sn from "classnames";

import * as actions from "../../actions/productActions";
import Search from "../search/index";
import styles from "./Content.scss";

class Content extends Component {
  state = { selected: [], liked: [], deleted: [], term: "" };

  selectProduct = item => {
    if (!this.state.selected.includes(item)) {
      this.setState({
        selected: [...this.state.selected, item]
      });
      this.props.actions.addProduct(item);
    } else {
      const index = this.state.selected.indexOf(item);
      if (index !== 0) {
        this.setState({
          selected: [
            ...this.state.selected.splice(0, index),
            ...this.state.selected.splice(index)
          ]
        });
      } else {
        this.setState({
          selected: [...this.state.selected.splice(index + 1)]
        });
      }
      this.props.actions.deleteProduct(item);
    }
  };

  like = (e, item) => {
    e.stopPropagation();
    if (!this.state.liked.includes(item)) {
      this.setState({
        liked: [...this.state.liked, item]
      });
      this.props.actions.likeProduct(item);
    } else {
      const index = this.state.liked.indexOf(item);
      if (index !== 0) {
        this.setState({
          liked: [
            ...this.state.liked.splice(0, index),
            ...this.state.liked.splice(index + 1)
          ]
        });
      } else {
        this.setState({
          liked: [...this.state.liked.splice(index + 1)]
        });
      }
      this.props.actions.unlikeProduct(item);
    }
  };

  delete = () => {
    this.setState({
      deleted: !this.state.deleted
    });
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
    console.log(groups);
    return (
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
                        this.props.selectedProducts.includes(item.title) &&
                          styles["content__item--selected"]
                      )}
                      style={{ backgroundImage: `url(${item.media})` }}
                      onClick={() => this.selectProduct(item.title)}
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
                          this.props.selectedProducts.includes(item.title) &&
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
                    this.props.selectedProducts.includes(item.title) &&
                      styles["content__item--selected"]
                  )}
                  style={{ backgroundImage: `url(${item.media})` }}
                  onClick={() => this.selectProduct(item.title)}
                >
                  <div className={styles.content__icons}>
                    {/* <i
                      className={sn(
                        "material-icons",
                        this.state.deleted && styles["icon--selected"]
                      )}
                      onClick={this.delete}
                    >
                      delete
                    </i> */}
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
                      this.props.selectedProducts.includes(item.title) &&
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
    likedProducts: state.likedProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
