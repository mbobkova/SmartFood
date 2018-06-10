import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./FavouriteProducts.scss";
import { unlikeProduct } from "../../actions/productActions";
import sn from "classnames";

class FavouriteProducts extends Component {
  unlikeProduct = (e, item) => {
    e.stopPropagation();
    this.props.unlikeProduct(item);
  };
  render() {
    const { groups, likedProducts } = this.props;
    return (
      <div className={styles["favourite-products"]}>
        {groups.map(group =>
          group.items.map((item, index) =>
            likedProducts.map(
              product =>
                product === item.title ? (
                  <div
                    className={styles["favourite-products__item"]}
                    key={index}
                  >
                    <div
                      className={sn(styles["favourite-products__item-padding"])}
                      style={{ backgroundImage: `url(${item.media})` }}
                    >
                      <div className={styles["favourite-products__icons"]}>
                        <i
                          className={sn(
                            "material-icons",
                            likedProducts.includes(item.title) &&
                              styles["icon--selected"]
                          )}
                          onClick={e => {
                            this.unlikeProduct(e, item.title);
                          }}
                        >
                          favorite
                        </i>
                      </div>
                      <div
                        className={sn(styles["favourite-products__item-title"])}
                      >
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  undefined
                )
            )
          )
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    likedProducts: state.likedProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unlikeProduct: bindActionCreators(unlikeProduct, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteProducts);

