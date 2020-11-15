import React, { Children } from 'react';
import styles from './commentformcontrols.css';

interface ICommentFormControls {
  children: React.ReactNode;
}

export function CommentFormControls( { children }: ICommentFormControls ) {
  return (
    <div className={styles.controlBar}>
      { children }
    </div>

  );
}
