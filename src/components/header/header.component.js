import React from 'react';
import styles from './header.module.scss';

const Header = ({ back }) => (
  <div className={styles.header}>{back && <button className={styles.back_button} onClick={back} />}</div>
);

export default Header;
