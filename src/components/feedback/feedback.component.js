import React from 'react';
import styles from './feedback.module.scss';

const Feedback = ({ title, subtitle }) => (
  <section className={styles.c_feedback}>
    <div className={styles.title}>{title}</div>
    {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
  </section>
);

export default Feedback;
