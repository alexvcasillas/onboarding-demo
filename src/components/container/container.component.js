import React from 'react';
import styles from './container.module.scss';

const Container = props => <section className={styles.container}>{props.children}</section>;

export default Container;
