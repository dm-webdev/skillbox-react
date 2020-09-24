import React from 'react';
import styles from './card.css';
import { CardContent } from './CardContent';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';

export function Card() {
  return (
    <li className={styles.card}>
      <CardContent />

      <CardPreview />

      <CardMenu />
      
      <CardControls />
    </li>
  );
}
