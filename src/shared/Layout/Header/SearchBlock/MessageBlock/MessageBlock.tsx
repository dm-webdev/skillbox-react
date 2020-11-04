import React from "react";
import styles from "./messageblock.css";
import { Icon, EIcons } from "../../../../../utils/component/Icon";

interface IMessageProps {
  messageCount?: string;
}

export function MessageBlock({messageCount}:IMessageProps) {
  return (
    <a className={styles.message} href="#">
      <span className={styles.message__count}>{messageCount || "0"}</span>

      <Icon name={EIcons.iconMessage} size={14} tabletSize={20} />
    </a>
  );
}
