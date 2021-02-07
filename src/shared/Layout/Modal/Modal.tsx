import React from "react";
import { CardPreview } from "../Content/Card/CardPreview";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import styles from "./modal.css";
import { ModalArticle } from "./ModalArticle";
import { ModalControls } from "./ModalControls";
import { ModalHeaderBar } from "./ModalHeaderBar";
import ReactDOM from "react-dom";
import { useModalOpen } from "../../../hooks/useModalOpen";
import { ICard } from "../../../store/contentReducer/contentReducer";

interface IModal {
  content: ICard;
  hideFn?: () => void;
  modalOpen?: () => void;
}

export function Modal({ content, hideFn, modalOpen }: IModal) {

  const node = document.querySelector("#modal_root"); //type guard
  if (!node) return null;

  const [ref] = useModalOpen();

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__container} ref={ref}>
        <ModalHeaderBar content={content} modalOpen={modalOpen} />       

        <ModalArticle>
          <CardPreview preview={content} />
          <p className={styles.modal__text}>
            Есть над чем задуматься: тщательные исследования конкурентов
            представляют собой не что иное, как квинтэссенцию победы маркетинга
            над разумом и должны быть ассоциативно распределены по отраслям.
            Прежде всего, начало повседневной работы по формированию позиции
            однозначно фиксирует необходимость кластеризации усилий. Но
            сторонники тоталитаризма в науке и по сей день остаются уделом
            либералов, которые жаждут быть превращены в посмешище, хотя само их
            существование приносит несомненную пользу обществу.
          </p>
        </ModalArticle>

        <ModalControls content={content} hideFn={hideFn} />

        <CommentForm content={content} />

        <CommentList content={content} />
      </div>
    </div>,
    node
  );
}
