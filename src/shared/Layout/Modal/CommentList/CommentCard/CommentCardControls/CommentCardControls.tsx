import React from 'react';
import { ShareButton } from '../../../../Content/Card/CardControls/ShareButton';
import { ComplainButtonModal } from '../../../ModalControls/ComplainButtonModal';
import { ICommentCard } from '../CommentCard';
import { AnswerBtn } from './AnswerBtn';
import styles from './commentcardcontrols.css';

interface ICommentCardControls {
  comment: ICommentCard;
  fn: () => void;
}

export function CommentCardControls({ comment, fn }: ICommentCardControls) {
  return (
    <div className={ styles.commentCardControls }>
      <AnswerBtn fn={fn} />

      <ShareButton id={ comment.id } name="shareButtonComment"/>

      <ComplainButtonModal id={ comment.id } name="complainBtnComment__title" />
    </div>
  );
}
