import React from 'react';
import styles from './expandbtn.css';

interface IExpandBtn {
  handleCommentOpen: ()=> void;
}

export function ExpandBtn({handleCommentOpen}: IExpandBtn) {
  return (
    <button className={styles.expandBtn} type="button" aria-label="Развернуть комментарий" onClick={()=> handleCommentOpen()}></button>
  );
}
