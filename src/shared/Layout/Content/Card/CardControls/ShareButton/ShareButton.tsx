import React from "react";
import styles from "./sharebutton.css";

interface IShareBtn {
  id: string;
}

export function ShareButton({ id }: IShareBtn) {
  return (
    <button className={styles.shareButton} aria-label="поделиться">
      <span className={styles.shareButtonDesk}>Поделиться</span>
    </button>
  );
}
