import React, { Component } from 'react';
import styles from './App.scss';
import { connect } from 'react-redux'

import { content } from './data';

import Header from '../../components/header/index';
import Filter from '../../components/filter/index';
import Content from '../../components/content/index';

class App extends Component { 
  render() {
    return (
      <div className={styles.wrapper}>

        <Header />
        <Filter content={content}/>
        <Content content={content} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    meet: state.meet
  }
}

export default connect(mapStateToProps)(App)
