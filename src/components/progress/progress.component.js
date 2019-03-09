import React from 'react';
import styles from './progress.module.scss';

const Progress = ({ currentStep, numberOfSteps }) => (
  <div className={styles.c_progress}>
    <div style={{ width: `${(currentStep * 100) / numberOfSteps}%` }} />
  </div>
);

export default Progress;
