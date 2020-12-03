import React, { useContext } from "react";
import { MessageBlock } from "./MessageBlock";
import { SearchBar } from "./SearchBar";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

export function SearchBlock() {  
 
  return (
    <div className={styles.searchBlock}>
      <UserBlock />

      <SearchBar />

      <MessageBlock />
    </div>
  );
}
