import React from "react";
import styles from "./removebutton.css";

interface IRemoveBtn {
  id: string;
  onClick?: () => void;
  hideFn?: () => void;
}

export function RemoveButton({ id, onClick, hideFn }: IRemoveBtn) {
  return (
    <button
      className={styles.removeButton}
      aria-label="удалить"
      onClick={hideFn}
    >
      <span className={styles.removeButtonDesk}>Удалить</span>
    </button>
  );
}
