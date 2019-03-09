import React from 'react';
import styles from './button.module.scss';

const Button = props => (
  <button className={styles.button} {...props} data-is-disabled={props.disabled}>
    {props.children}
  </button>
);

export default Button;
