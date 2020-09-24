import React from "react";
import styles from "./cardmenu.css";

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} aria-label="развернуть меню"></button>
    </div>
  );
}