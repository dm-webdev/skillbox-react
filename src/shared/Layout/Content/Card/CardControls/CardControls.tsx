import React from "react";
import styles from "./cardcontrols.css";
import { CommentsButton } from "./CommentsButton";
import { KarmaCount } from "./KarmaCount";
import { RemoveButton } from "./RemoveButton";
import { ShareButton } from "./ShareButton";
import { StatButton } from "./StatButton";

export function CardControls() {
  return (
    <div className={styles.controls}>
      <KarmaCount />

      <CommentsButton />

      <div className={styles.action}>
        <StatButton />
        <ShareButton />
        <RemoveButton />
      </div>
    </div>
  );
}
