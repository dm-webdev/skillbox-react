import React from 'react';
import styles from './commentselect.css';

export function CommentSelect() {
  return (
    <label className={styles.comment__select_text}>Сортировать по:
      <select name="commentSelect" className={styles.comment__select}>
        <option value="best">Лучшее</option>
        <option value="recentFirst">Сначала недавние</option>
        <option value="lateFirst">Сначала поздние</option>
      </select>
    </label>
    
  );
}
