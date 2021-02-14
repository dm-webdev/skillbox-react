import React from "react";
import styles from "./removebutton.css";
import classNames from "classnames";

interface IRemoveBtn {
  id: string;
  onClick?: () => void;
  hideFn?: () => void;
  name: "removeButton" | "removeButtonModal";
}

export function RemoveButton({ id, onClick, hideFn, name }: IRemoveBtn) {
  const classes = classNames(
    styles[name],
  );

  return (
    <button
      className={classes}
      aria-label="удалить"
      onClick={hideFn}
    >
      <span className={styles.removeButtonDesk}>Удалить</span>
    </button>
  );
}
