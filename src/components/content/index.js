import React, { Component } from "react";
import sn from "classnames";
import styles from "./Content.scss";

import Search from "../search/index";

export default class Content extends Component {
  state = { liked: false, deleted: false };

  like = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  delete = () => {
    this.setState({
      deleted: !this.state.deleted
    });
  };

  render() {
    const groups = this.props.content;
    return (
      <div>
        <Search />
        <div className={styles.content}>
          {groups.map(group =>
            group.items.map((item, index) => (
              <div className={styles.content__item} key={index}>
                <div
                  className={styles["content__item-padding"]}
                  style={{ backgroundImage: `url(${item.media})` }}
                >
                  <div className={styles.content__icons}>
                    <i
                      className={sn(
                        "material-icons",
                        this.state.deleted && styles["icon--selected"]
                      )}
                      onClick={this.delete}
                    >
                      delete
                    </i>
                    <i
                      className={sn(
                        "material-icons",
                        this.state.liked && styles["icon--selected"]
                      )}
                      onClick={this.like}
                    >
                      favorite
                    </i>
                  </div>
                  <div className={styles["content__item-title"]}>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
