import React from "react";
import { Card } from "../Card/Card";
import styles from "./cardslist.css";

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

export function CardsList({ list }: ICardListProps) {
  return (
    <ul className={ styles.cardsList }>
      {list.map((item: ICard) => (
        <Card key={ item.id } item={ item } />
      ))}
    </ul>
  );
}
