import React from 'react';
import styles from './statbutton.css';

export function StatButton() {
  return (
    <button className={styles.statButton} aria-label="статистика">
      <span className={styles.statButtonDesk}>Статистика публикации</span>
    </button>
  );
}
