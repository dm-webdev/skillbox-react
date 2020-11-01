import React from "react";
import { Card } from "../Card/Card";
import styles from "./cardslist.css";

const R = require("ramda");

export interface ICard {
  id: string;
  title: string;
  createDate: string;
  userName: string;
  avatarImg: string;
  img: string;
}

interface ICardListProps {
  list: ICard[];
}

const NOOP = () => {};

export function CardsList({ list }: ICardListProps) {
  const [cardList, setList] = React.useState(list);

  const handleItemClick = (id: string) => {
    setList(cardList.filter((item) => item.id !== id));
  };

  return (
    <ul className={styles.cardsList}>
      {cardList.map((item: ICard, index) => (
          <Card
            key={item.id}
            item={item}
            hideFn={() => handleItemClick(item.id)}
          ></Card>
      ))}
    </ul>
  );
}
