import React from 'react';
import styles from './commentsbutton.css';

export function CommentsButton() {
  return (
    <button className={styles.commentsButton} aria-label="просмотреть комментарии">    
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
