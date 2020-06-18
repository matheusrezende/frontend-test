import React from 'react';
import {ReactComponent as Spinner} from '../../Assets/Spinner.svg';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.loadingWrapper}>
      <Spinner />
    </div>
  );
}
