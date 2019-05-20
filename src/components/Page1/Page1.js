import React from 'react';
import { connect } from 'react-redux';

import styles from './Page1.scss';

const Page1 = (props) => {
  console.log('--props--',props)

  return (
    <div className={styles.block}>
      <div className={styles.img}/>
      <h1 className={styles.header}>Hello</h1>
    </div>
  )  
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(Page1);
