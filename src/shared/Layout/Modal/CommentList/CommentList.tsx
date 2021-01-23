import React from 'react';
import { ICard } from '../../../../store/contentReducer/contentReducer';
import { CommentCard } from './CommentCard';
import styles from './commentlist.css';
import { CommentSelect } from './CommentSelect';

interface IContentList {
  content: ICard;
}

export function CommentList( {content}:IContentList ) {
  return (
    <div className={styles.commentList}>
      <CommentSelect />

      <ul className={styles.cardsList}>
      {content.comments.map((item) => (
        <CommentCard comment={ item } key={item.id}/>
      ))}
    </ul>

      
    </div>
    
  );
}
