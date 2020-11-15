import React, { useState, useEffect, useContext } from "react";
import { Card } from "../Card/Card";
import styles from "./cardslist.css";
import database from "../../../assets/database";
import { bestArticleContext } from "../../../context/bestArticleContext";

export interface ICard {
  id: string;
  title: string;
  createDate: string;
  authorName: string;
  authorImg: string;
  articleImg: string;
  score: string;
  subreddit: string,
  comments: 
  {
    id: string;
    commentAuthorImg: string;
    commentAuthorName: string;
    commentDate: string;
    league: string;
    commentText: string;
  }[];
}

export function CardsList() {
  const cardList = useContext(bestArticleContext);
  const [list, setList] = useState(database);
  
  useEffect(() => {
    if (cardList.length > 1) {
      setList(cardList);
    } else {
      console.log(cardList.length);
    }
  }, [cardList]);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  };

  

  return (
    <ul className={styles.cardsList}>
      {list.map((item: ICard) => (
        <Card
          key={item.id}
          item={item}
          hideFn={() => handleItemClick(item.id)}
        ></Card>
      ))}
    </ul>
  );
}
