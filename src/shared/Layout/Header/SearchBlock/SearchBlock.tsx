import React from "react";
import { MessageBlock } from "./MessageBlock";
import { SearchBar } from "./SearchBar";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock clientId={`${process.env.CLIENT_ID}`} />

      <SearchBar />

      <MessageBlock />
    </div>
  );
}
