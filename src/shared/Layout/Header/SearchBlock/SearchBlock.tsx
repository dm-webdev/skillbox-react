import React, { useContext } from "react";
import { MessageBlock } from "./MessageBlock";
import { SearchBar } from "./SearchBar";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { uriToLink } from "../../../../utils/js/uriToLink";
import { LoadingIndicator } from "../../Common/LoadingIndicator";
import { userContext } from "../../../context/userContext";

export function SearchBlock() {
  const { loading, iconImg, name, messageCount } = useContext(userContext);  

  return (
    <div className={styles.searchBlock}>
      <LoadingIndicator loading={loading} />

      <UserBlock avatarSrc={uriToLink(iconImg)} userName={name} />

      <SearchBar />

      <MessageBlock messageCount={messageCount} />
    </div>
  );
}
