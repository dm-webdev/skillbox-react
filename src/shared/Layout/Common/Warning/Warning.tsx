import React from 'react';
import styles from './warning.css';

export function Warning() {
  return (
    <div className={styles.container}>
      <p>Что-то пошло не так =( </p>
      <p>Повторите попытку позже.</p>
    </div>
  );
}
