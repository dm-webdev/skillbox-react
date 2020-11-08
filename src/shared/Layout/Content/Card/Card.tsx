import React from "react";
import { ICard } from "../CardsList";
import styles from "./card.css";
import { CardContent } from "./CardContent";
import { CardControls } from "./CardControls";
import { CardMenu } from "./CardMenu";
import { CardPreview } from "./CardPreview";

interface ICardItem {
  item: ICard;
  hideFn?: () => void;
  children?: React.ReactNode;
}

export function Card(card: ICardItem) {
  return (
    <li className={styles.card}>
      <CardContent content={card.item} />

      <CardPreview preview={card.item} />

      <CardMenu id={card.item.id} hideFn={card.hideFn} />

      <CardControls id={card.item.id} hideFn={card.hideFn} score={card.item.score}/>
    </li>
  );
}
