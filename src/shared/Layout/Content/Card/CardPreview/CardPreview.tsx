import React from 'react';
import { ICard } from '../../CardsList';
import styles from './cardpreview.css';

interface IPreview {
  preview: ICard;
}

export function CardPreview(preview: IPreview) {
  
  return (
    <div className={styles.preview}>
      <img 
        className={styles.previewImg} 
        src={ preview.preview.img } 
        alt={ preview.preview.title }/>
    </div>
  );
}