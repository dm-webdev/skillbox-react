import React from 'react';
import styles from './rollupbtn.css';

interface IRollUPBtn {
  handleCommentClose: ()=>void;
}

export function RollUPBtn( {handleCommentClose}: IRollUPBtn) {
  return (
    <button className={styles.rollUp} type="button" aria-label="Свернуть комментарий" onClick={()=>handleCommentClose()}></button>
  );
}
