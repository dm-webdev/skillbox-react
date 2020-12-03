import React from "react";
import styles from "./loader.css";

export function Loader() {
  return (
    <div className={styles.cssload_loader}>
      <div className={`${styles.cssload_inner} ${styles.cssload_one}`} />
      <div className={`${styles.cssload_inner} ${styles.cssload_two}`} />
      <div className={`${styles.cssload_inner} ${styles.cssload_three}`} />
    </div>
  );
}
