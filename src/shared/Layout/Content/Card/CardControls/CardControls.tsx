import React from "react";
import styles from "./cardcontrols.css";
import { CommentsButton } from "./CommentsButton";
import { KarmaCount } from "./KarmaCount";
import { RemoveButton } from "./RemoveButton";
import { ShareButton } from "./ShareButton";
import { StatButton } from "./StatButton";

interface IControls {
  id: string;
  score?: string;
  onClick?: () => void;
  hideFn?: () => void;
}

export function CardControls({ id, score, onClick, hideFn }: IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCount id={id} score={score}/>

      <CommentsButton id={id} />

      <div className={styles.action}>
        <StatButton id={id} />
        <ShareButton id={id} />
        <RemoveButton id={id} hideFn={hideFn} />
      </div>
    </div>
  );
}
