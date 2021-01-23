import React from 'react';
import { ICard } from '../../../../../store/contentReducer/contentReducer';
import styles from './votecountmodal.css';

interface IVoteCountModal {
  content: ICard;
}

export function VoteCountModal( {content}: IVoteCountModal ) {
  return (
    <div className={styles.voteCount}>{content.score[0]+content.score[1]}% Проголосовали</div>
  );
}
