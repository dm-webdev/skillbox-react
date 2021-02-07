import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { ICard } from "../../../../store/contentReducer/contentReducer";
import { Modal } from "../../Modal";
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

  const locationModal = useLocation().pathname === `/posts/${card.item.id}`

  return (
    <li className={styles.card}>
      <CardContent content={card.item} name="rubric" comment={undefined} />

      <CardPreview preview={card.item} />

      <CardMenu id={card.item.id} hideFn={card.hideFn} />

      <CardControls id={card.item.id} hideFn={card.hideFn} score={card.item.score}/>

      { locationModal && (
        <Modal content={card.item} hideFn={card.hideFn} />
      )}
    </li>
  );
}
