import React from 'react';
import styles from './karmacount.css';
import classNames from "classNames";

interface IKarmaCoutnBtn {
  id: string;
  score?: string;
  name: "karmaCounter" | "karmaCounterModal";
}

export function KarmaCount({ id, score, name }: IKarmaCoutnBtn) {
  const classes = classNames(
    styles[name],
  );

  return (
    <div className={classes}>
      <button className={styles.up} aria-label="поставить лайк"></button>

      <span className={styles.karmaValue}>{score || "234"}</span>

      <button className={styles.down} aria-label="поставить дизлайк"></button>
    </div>
  );
}
