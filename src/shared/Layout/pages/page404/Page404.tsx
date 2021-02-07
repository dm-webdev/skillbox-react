import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./page404.css";

export function Page404() {
  let location = useLocation();

  return (
    <div className={styles.container}>
      <p className={styles.alert__text}>
        <b>Ошибка 404: </b>Страница по указанному адресу
        <br />
        <code>{location.pathname}</code>
        <br />
        не найдена!
      </p>

      <Link className={styles.loading__btn} to="/home">
        вернуться на домашнюю страницу
      </Link>
    </div>
  );
}
