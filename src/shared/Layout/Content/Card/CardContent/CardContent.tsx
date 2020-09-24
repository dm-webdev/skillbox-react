import React from "react";
import styles from "./cardcontent.css";
import { CreatedAt } from "./CreatedAt";

export function CardContent() {
  return (
      <section className={styles.cardContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
              className={styles.avatar}
              src="https://via.placeholder.com/20x20.png/FFFF00/000000?text=avatar"
              alt="аватар"
            />

            <a href="#user-url" className={styles.username}>
              Дмитрий Гришин
            </a>
          </div>

          <CreatedAt />
        </div>

        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности...
          </a>
        </h2>
      </section>
  );
}
