import React from "react";
import styles from "./messageblock.css";
import { Icon, EIcons } from "../../../../../utils/component/Icon";
import { useSelector } from "react-redux";
import { TRootReducer } from "../../../../../store/rootReducer";

export function MessageBlock() {
  const messageCount = useSelector<TRootReducer, string | undefined>(state => state.user.messageCount);
  
  return (
    <a className={styles.message} href="#">
      <span className={styles.message__count}>{ messageCount || "?" }</span>
      
      <Icon name={EIcons.iconMessage} size={14} tabletSize={20} />
    </a>
  );
}
