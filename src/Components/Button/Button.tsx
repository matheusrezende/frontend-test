import React, { ReactElement } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: ReactElement | string;
}

export default function Button({children, disabled, onClick}:ButtonProps) {
  return (
    <button type='button' className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
