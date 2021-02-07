import React, { useState, useEffect, useContext } from 'react';
import styles from './threadtitle.css';
import { useSelector } from 'react-redux';
import { TRootReducer } from '../../../../store/rootReducer';

export function ThreadTitle() {
  const token = useSelector<TRootReducer, string | undefined> (state => state.app.token);

  return (
    <h2 className={styles.threadTitle}>{token ? "Приятного просмотра" : "Пожалуйста зарегистрируйтесь"}</h2>
  );
}
