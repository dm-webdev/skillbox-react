import React from 'react';
import styles from './karmacount.css';

interface IKarmaCoutnBtn {
  id: string;
  score?: string;
}

export function KarmaCount({ id, score }: IKarmaCoutnBtn) {
  return (
    <div className={styles.karmaCounter}>
    <button className={styles.up} aria-label="поставить лайк"></button>

    <span className={styles.karmaValue}>{score || "234"}</span>

    <button className={styles.down} aria-label="поставить дизлайк"></button>
  </div>
  );
}
