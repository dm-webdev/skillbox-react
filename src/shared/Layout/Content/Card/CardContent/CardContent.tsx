import React, { useState } from "react";
import { ICard } from "../../CardsList";
import styles from "./cardcontent.css";
import { CreatedAt } from "./CreatedAt";
import classNames from "classNames";
import { ICommentCard } from "../../../Modal/CommentList/CommentCard/CommentCard";

interface IContent {
  content: ICard | undefined;
  comment: ICommentCard | undefined;
  name: "rubric" | "rubricModal" | "rubricComment";
  modalOpen?: () => void;
}

// interface IContentComment {
//   comment: ICommentCard;
// }

export function CardContent({ content, name, comment, modalOpen }: IContent) {
  const classes = classNames(styles[name]);

  return (
    <section className={styles.cardContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={content?.authorImg || comment?.commentAuthorImg}
            alt={
              content?.authorName.substring(0, 1).toUpperCase() ||
              comment?.commentAuthorName.substring(0, 1).toUpperCase()
            }
          />

          <a href="#user-url" className={styles.username}>
            {content?.authorName || comment?.commentAuthorName}
          </a>
        </div>

        <CreatedAt
          createDate={content?.createDate || comment?.commentDate || "0"}
          name={content ? "createdAt" : "" || comment ? "createdAtModal" : ""}
        />

        <div className={classes}>{content?.subreddit || comment?.league}</div>
      </div>

      <h2 className={styles.title}>
        <button
          type="button"
          className={styles.postLink}
          onClick={() => modalOpen?.()}
        >
          {content
            ? content.title.length > 70
              ? `${content.title.slice(0, 70)} ...`
              : content?.title
            : undefined}
        </button>
      </h2>
    </section>
  );
}
