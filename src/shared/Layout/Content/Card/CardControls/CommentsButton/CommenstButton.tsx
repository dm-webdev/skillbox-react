import React from 'react';
import styles from './commentsbutton.css';

interface ICommentsBtn {
  id: string;
}

export function CommentsButton({ id }: ICommentsBtn) {
  return (
    <button className={styles.commentsButton} aria-label="просмотреть комментарии">    
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
