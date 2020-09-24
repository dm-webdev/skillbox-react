import React from 'react';
import styles from './commenstbutton.css';

export function CommenstButton() {
  return (
    <button className={styles.commentsButton} aria-label="просмотреть комментарии">    
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
