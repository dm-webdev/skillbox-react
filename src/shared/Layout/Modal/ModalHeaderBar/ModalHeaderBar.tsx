import React from "react";
import styles from "./modalheaderbar.css";
import { EIcons, Icon } from "../../../../utils/component/Icon";
import { CardContent } from "../../Content/Card/CardContent";
import { KarmaCount } from "../../Content/Card/CardControls/KarmaCount";
import { ICard } from "../../../../store/contentReducer/contentReducer";
import { useHistory } from "react-router-dom";

interface IModalHeaderBar {
  content: ICard;
}

export function ModalHeaderBar({ content }: IModalHeaderBar) {
  const history = useHistory();

  const handleModalClose = () => {
    history.push("/posts")
  }

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
        onClick={handleModalClose}
      >
        <Icon name={EIcons.iconHideBtn} size={20} />
      </button>
    </div>
  );
}
