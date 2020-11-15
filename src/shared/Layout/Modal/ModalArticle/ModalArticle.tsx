import React from 'react';
import styles from './modalarticle.css';

interface IModalArticle {
  children?: React.ReactNode;
}

export function ModalArticle( { children }: IModalArticle ) {
  return (
    <article className={styles.modalArticle}>
      {children}
    </article>
  );
}
