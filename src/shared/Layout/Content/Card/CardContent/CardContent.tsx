import React from "react";
import { ICard } from "../../CardsList";
import styles from "./cardcontent.css";
import { CreatedAt } from "./CreatedAt";

interface IContent {
  content: ICard;
}

export function CardContent(content: IContent) {  
  return (
      <section className={styles.cardContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
              className={styles.avatar}
              src={ content.content.authorImg }
              alt={ content.content.authorName.substring(0, 1).toUpperCase() }
            />

            <a href="#user-url" className={styles.username}>
              { content.content.authorName }
            </a>
          </div>

          <CreatedAt createDate={ content.content.createDate } />
        </div>

        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            { content.content.title }
          </a>
        </h2>
      </section>
  );
}
