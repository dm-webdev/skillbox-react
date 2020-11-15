import React from 'react';
import styles from './answerbtn.css';

interface IAnswerBtn {
  fn: ()=> void;
}

export function AnswerBtn({ fn }:IAnswerBtn ) {
  return (
    <button className={styles.answerButton} aria-label="ответить" onClick={()=>fn()}>
      <span className={styles.answerButtonDesk}>Ответить</span>
    </button>
  );
}
