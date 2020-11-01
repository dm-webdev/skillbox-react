import React from 'react';
import styles from './statbutton.css';

interface IStatBtn {
  id: string;
}

export function StatButton({ id }: IStatBtn) {
  return (
    <button className={styles.statButton} aria-label="статистика">
      <span className={styles.statButtonDesk}>Статистика публикации</span>
    </button>
  );
}
