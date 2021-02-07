import React from 'react';
import { CommentsButton } from '../../Content/Card/CardControls/CommentsButton';
import { RemoveButton } from '../../Content/Card/CardControls/RemoveButton';
import { ShareButton } from '../../Content/Card/CardControls/ShareButton';
import { SaveButtonModal } from './SaveButtonModal/SaveButtonModal';

import styles from './modalcontrols.css';
import { ComplainButtonModal } from './ComplainButtonModal';
import { VoteCountModal } from './VoteCountModal';
import { ICard } from '../../../../store/contentReducer/contentReducer';

interface IModalContent {
  content: ICard;
  hideFn?: () => void;
}

export function ModalControls( { content, hideFn }: IModalContent ) {
  return (
    <div className={styles.modalControls}>
      <CommentsButton id={ content.id } name="commentsButtonModal" numberOfComments={ `${content.comments.length}` }/>

      <ShareButton id={ content.id } name="shareButtonModal" />

      <RemoveButton id={ content.id } hideFn={ hideFn } name="removeButtonModal" />

      <SaveButtonModal content={ content } />

      <ComplainButtonModal id={ content.id } name="complainBtn__title" />

      <VoteCountModal content={ content } />
    </div>
  );
}
