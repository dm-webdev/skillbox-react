import React from 'react';
import styles from './karmacount.css';

export function KarmaCount() {
  return (
    <div className={styles.karmaCounter}>
    <button className={styles.up} aria-label="поставить лайк"></button>

    <span className={styles.karmaValue}>234</span>

    <button className={styles.down} aria-label="поставить дизлайк"></button>
  </div>
  );
}