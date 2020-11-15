import React from "react";
import styles from "./sharebutton.css";
import classNames from "classNames";

interface IShareBtn {
  id: string;
  name: "shareButton" | "shareButtonModal" | "shareButtonComment";
}

export function ShareButton({ id, name }: IShareBtn) {
  const classes = classNames(
    styles[name],
  );

  return (
    <button className={classes} aria-label="поделиться">
      <span className={styles.shareButtonDesk}>Поделиться</span>
    </button>
  );
}
