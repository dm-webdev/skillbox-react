import React from "react";
import styles from "./sharebutton.css";

export function ShareButton() {
  return (
    <button className={styles.shareButton} aria-label="поделиться">
      <span className={styles.shareButtonDesk}>Поделиться</span>
    </button>
  );
}
