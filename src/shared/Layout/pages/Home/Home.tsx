import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { TRootReducer } from "../../../../store/rootReducer";
import styles from "./home.css";


export function Home() {
  const token = useSelector<TRootReducer, string | undefined>(
    (state) => state.app.token
  );  
  const history = useHistory();

  return (    
    <div className={styles.container}>
      {token ? history.push("/posts") : null}

      <p className={styles.alert__text}>Данное приложение разработано в рамках курса JavaScript-фреймворк React.js онлайн университета SKILLBOX. В разработке использован React и Reddit API. Программа написана на TypeScript с использованием Redux и React-router.
      </p>

      <p className={styles.alert__text}>Для просмотра постов, пожалуйста, авторизуйтесь.
      </p>
    </div>
  );
};