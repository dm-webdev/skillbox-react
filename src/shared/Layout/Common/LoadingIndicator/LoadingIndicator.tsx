import React from "react";
import styles from "./loadingindicator.css";

export function LoadingIndicator() {
  return (
    <div className={styles.cssloadThecube}>
      <div className={`${styles.cssloadCube} ${styles.cssloadC1}`} />
      <div className={`${styles.cssloadCube} ${styles.cssloadC2}`} />
      <div className={`${styles.cssloadCube} ${styles.cssloadC4}`} />
      <div className={`${styles.cssloadCube} ${styles.cssloadC3}`} />
    </div>
  );
}
