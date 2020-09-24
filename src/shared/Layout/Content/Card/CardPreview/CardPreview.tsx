import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://via.placeholder.com/320x320.png/FFFF00/000000?text=img" alt="изображение поста"/>
    </div>
  );
}
