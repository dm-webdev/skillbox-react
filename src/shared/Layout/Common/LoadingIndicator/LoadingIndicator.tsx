import React from "react";
import styles from "./loadingindicator.css";

interface ILoader {
  loading: boolean | undefined;
}

export function LoadingIndicator({loading}:ILoader) {
  
  return (
    <div>
      {loading ?
        <div className={styles.cssloadThecube}>
          <div className={`${styles.cssloadCube} ${styles.cssloadC1}`} />
          <div className={`${styles.cssloadCube} ${styles.cssloadC2}`} />
          <div className={`${styles.cssloadCube} ${styles.cssloadC4}`} />
          <div className={`${styles.cssloadCube} ${styles.cssloadC3}`} />
        </div>
      : ""
      }
    </div> 
  );
}
