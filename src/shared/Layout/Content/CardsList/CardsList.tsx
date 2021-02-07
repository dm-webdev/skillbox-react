import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getArticles } from "../../../../store/contentReducer/contentAction";
import { ICard } from "../../../../store/contentReducer/contentReducer";
import { TRootReducer } from "../../../../store/rootReducer";
import { Card } from "../Card/Card";
import styles from "./cardslist.css";

export function CardsList() {
  const article_list = useSelector<TRootReducer, ICard[]>(
    (state) => state.content.articles
  );
  const token = useSelector<TRootReducer, string | undefined>(
    (state) => state.app.token
  );
  const loadingCount = useSelector<TRootReducer, number>(
    (state) => state.content.loading_count
  );
  const history = useHistory();

  const dispatch = useDispatch();
  const bottomMarker = useRef<HTMLDivElement>(null);
  const bottomOfList = bottomMarker.current;

  const [list, setList] = useState(article_list);
  useEffect(() => {
    dispatch({ type: "setList" });
    setList(article_list);
  }, [article_list]);

  useEffect(() => {
    if (!token) return;

    const observer = new IntersectionObserver(
      () => {
        if (bottomOfList) {
          if (
            bottomOfList.getBoundingClientRect().top - window.innerHeight <
            40
          ) {
            dispatch(getArticles());
          }
        }
      },
      {
        rootMargin: "10px 20px 30px 40px",
        threshold: 1.0,
      }
    );

    if (loadingCount === 1) {
      dispatch(getArticles());
    }

    if (bottomOfList && bottomOfList !== null && loadingCount % 3 !== 0) {
      observer.observe(bottomOfList);
    }

    return () => {
      if (bottomOfList) {
        observer.unobserve(bottomOfList);
      }
    };
  }, [bottomOfList, loadingCount, article_list, token, history]);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <ul className={styles.cardsList}>
      {token ? null : history.push("/home")}

      {list.length === 0 && (
        <div className={styles.alert__text}>Нет ни одного поста</div>
      )}

      {list.map((item: ICard) => (
        <Card
          key={item.id}
          item={item}
          hideFn={() => handleItemClick(item.id)}
        ></Card>
      ))}

      {loadingCount % 3 === 0 ? (
        <button
          className={styles.loading__btn}
          onClick={() => dispatch(getArticles())}
        >
          загрузить еще
        </button>
      ) : null}

      <div ref={bottomMarker} />
    </ul>
  );
}
