import React from 'react';
import styles from './commentsbutton.css';
import classNames from "classNames";
import { getCountTitle } from '../../../../../../utils/react/getCountTitle';

interface ICommentsBtn {
  id: string;
  numberOfComments: string;
  name: "commentsButton" | "commentsButtonModal";
}


export function CommentsButton({ id, numberOfComments, name }: ICommentsBtn) {
  const classes = classNames(
    styles[name],
  );

  return (
    <button className={classes} aria-label="просмотреть комментарии">
      <span className={ styles.commentButton__count }>{ numberOfComments }</span>
      <span className={ styles.commentButton_title }>{ getCountTitle( numberOfComments ) }</span>
    </button>
  );
}
