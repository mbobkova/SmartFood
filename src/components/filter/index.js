import React, { Component } from "react";
import { connect } from "react-redux";
import Content from "../content/index";

import styles from "./Filter.scss";

class Filter extends Component {
  state = {
    groupSelected: -1
  };

  showGroup = group => {
    this.setState({
      groupSelected: group
    });
  };

  render() {
    console.log(this.props);
    const { groups } = this.props;
    const { groupSelected } = this.state;
    return (
      <div>
        <div className={styles.filter}>
          <button
            className={styles.filter__tab}
            onClick={() => this.showGroup(-1)}
          >
            <span> All</span>
          </button>
          {groups.map((item, index) => {
            return (
              <button
                key={index}
                className={styles.filter__tab}
                onClick={() => this.showGroup(index)}
              >
                <span> {item.group}</span>
              </button>
            );
          })}
        </div>
        <Content
          content={groupSelected !== -1 ? groups[groupSelected] : groups}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export default connect(mapStateToProps)(Filter);
