import React from 'react';
import { ICard } from '../CardsList';
import styles from './card.css';
import { CardContent } from './CardContent';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';

interface ICardItem {
  item: ICard;
}

export function Card( card: ICardItem ) {
  // console.log(card.item.id);

  return (
    <li className={styles.card}>
     

      <CardContent content={card.item} />
      
      <CardPreview preview={ card.item } />

      <CardMenu />
      
      <CardControls />
    </li>
  );
}
