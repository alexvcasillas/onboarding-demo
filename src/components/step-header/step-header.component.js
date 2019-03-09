import React from 'react';
import styles from './step-header.module.scss';

const StepHeader = props => <header className={styles.header}>{props.children}</header>;

export default StepHeader;
