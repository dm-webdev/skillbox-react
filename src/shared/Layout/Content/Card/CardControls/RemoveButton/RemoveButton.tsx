import React from "react";
import styles from "./removebutton.css";

export function RemoveButton() {
  return (
    <button className={styles.removeButton} aria-label="удалить">
      <span className={styles.removeButtonDesk}>Удалить</span>
    </button>
  );
}
