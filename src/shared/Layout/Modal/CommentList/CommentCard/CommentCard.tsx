import React, { useState } from "react";
import { CardContent } from "../../../Content/Card/CardContent";
import { CommentFormUncontrolled } from "../../CommentFormUncontrolled";
import styles from "./commentcard.css";
import { CommentCardControls } from "./CommentCardControls";
import { SideBar } from "./SideBar";
import { ExpandBtn } from "./SideBar/ExpandBtn";
import { RollUPBtn } from "./SideBar/RollUPBtn";

export interface ICommentCard {
  id: string;
  commentAuthorImg: string;
  commentAuthorName: string;
  commentDate: string;
  league: string;
  commentText: string;
}

interface ICardComment {
  comment: ICommentCard;
}

export function CommentCard({ comment }: ICardComment) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <li className={styles.commentCard}>
      <SideBar>
        <RollUPBtn handleCommentClose={() => setIsCommentOpen(false)} />

        <ExpandBtn handleCommentOpen={() => setIsCommentOpen(true)} />

        <span className={styles.decorLine} aria-hidden="true"></span>
      </SideBar>
      <div className={styles.commentContent}>
        <CardContent
          content={undefined}
          name="rubricComment"
          comment={comment}
        />
        {isCommentOpen && (
          <div>
            <p className={styles.commentText}>{comment.commentText}</p>

            <CommentCardControls comment={comment} fn={handleFormOpen} />

            {isFormOpen && <CommentFormUncontrolled id={comment.id} />}
          </div>
        )}
      </div>
    </li>
  );
}
