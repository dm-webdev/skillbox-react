import React from "react";
import { MessageBlock } from "./MessageBlock";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

export function SearchBlock() {  
 
  return (
    <div className={styles.searchBlock}>
      <UserBlock />

      <MessageBlock />
    </div>
  );
}
