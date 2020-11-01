import React from 'react';
import styles from './sortblock.css';

export function SortBlock() {
  return (
    <ul className={styles.sortBlock}>
      <li className={styles.block}>Просмотренное</li>
      <li className={styles.block}>Сохранённое</li>
      <li className={styles.active}>Мои посты</li>
      <li className={styles.block}>Прокомментированное</li>
    </ul>
  );
}
