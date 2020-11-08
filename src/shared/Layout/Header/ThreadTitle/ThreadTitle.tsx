import React, { useState, useEffect, useContext } from 'react';
import styles from './threadtitle.css';
import { tokenContext } from "../../../context/tokenContext";

export function ThreadTitle() {
  const token = useContext(tokenContext);
  const [showHeader, setHeader] = useState(false);

  useEffect(() => {
    if (token.length > 10) {     
      setHeader(true);
  }}, [token]);

  return (
    <h2 className={styles.threadTitle}>{showHeader ? "Личный кабинет" : "Пожалуйста зарегистрируйтесь"}</h2>
  );
}
