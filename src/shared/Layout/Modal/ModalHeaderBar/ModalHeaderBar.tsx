import React from "react";
import styles from "./modalheaderbar.css";
import { ICard } from "../../Content/CardsList";
import { EIcons, Icon } from "../../../../utils/component/Icon";
import { CardContent } from "../../Content/Card/CardContent";
import { KarmaCount } from "../../Content/Card/CardControls/KarmaCount";

interface IModalHeaderBar {
  content: ICard;
  modalOpen?: ()=>void;
}

export function ModalHeaderBar({ content, modalOpen }: IModalHeaderBar) {
  return (
    <div className={styles.modal__headerBar}>
      <KarmaCount
        id={content.id}
        score={content.score}
        name={"karmaCounterModal"}
      />

      <CardContent content={content} name="rubricModal" comment={undefined} />

      <button
        type="button"
        className={styles.hideBtn}
        aria-label="Закрыть статью"
        onClick={()=>modalOpen?.()}
      >
        <Icon name={EIcons.iconHideBtn} size={20} />
      </button>
    </div>
  );
}
