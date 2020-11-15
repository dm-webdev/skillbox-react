import React from "react";
import { getCreatedAt } from "../../../../../../utils/react/getCreatedAt";
import styles from "./createdat.css";
import classNames from "classNames";

interface ICreateDate {
  createDate: string;
  name: "createdAt" | "createdAtModal" | "";
}

export function CreatedAt( {createDate, name}: ICreateDate) {
  const classes = classNames(
    styles[name],
  );

  return (
    <span className={classes}>
      <span className={styles.publishedLabel}>опубликовано </span> { getCreatedAt(createDate) }
    </span>
  );
}
