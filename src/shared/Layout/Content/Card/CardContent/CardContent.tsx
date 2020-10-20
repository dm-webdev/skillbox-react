import React from "react";
import { ICard } from "../../CardsList";
import styles from "./cardcontent.css";
import { CreatedAt } from "./CreatedAt";

interface IContent {
  content: ICard;
}

export function CardContent(content: IContent) {
  console.log(typeof(content.content.createDate))
  
  return (
      <section className={styles.cardContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
              className={styles.avatar}
              src={ content.content.avatarImg }
              alt={ content.content.userName }
            />

            <a href="#user-url" className={styles.username}>
              { content.content.userName }
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
