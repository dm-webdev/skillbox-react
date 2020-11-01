import React, { createElement } from "react";
import { getCreatedAt } from "../../../../../../utils/react/getCreatedAt";
import styles from "./createdat.css";

interface ICreateDate {
  createDate: string;
}

export function CreatedAt( createDate: ICreateDate) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span> { getCreatedAt(new Date(createDate.createDate)) }
    </span>
  );
}
