import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react";
import { userContext } from "../../../context/userContext";
import { CommentFormControls } from "../CommentForm/CommentFormControls";
import { ControlsBtnGroup } from "../CommentForm/ControlsBtnGroup";
import styles from "./commentformuncontrolled.css";

interface ICommentFormUncontrolled {
  id: string;
}

export function CommentFormUncontrolled({ id }: ICommentFormUncontrolled) {
  const { loading, iconImg, name, messageCount } = useContext(userContext);

  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    console.log(ref.current?.value);
  }

  useEffect(()=> {
    ref.current?.focus();    
  })

  return (
    <form className={styles.commentFormAnswer} name="CommentFormAnswer" onSubmit={handleSubmit}>
      <textarea
        className={styles.commentFormAnswer__text}
        name="commentText"
        rows={4}
        placeholder={
          name == undefined
            ? "Чтобы оставить отзыв, пожалуйста зарегистрируйтесь"
            : `${name} , оставьте ваш комментарий`
        }
        ref={ref}
      />

      <CommentFormControls>
        <ControlsBtnGroup id={id} />
        <button
          className={styles.commentFormAnswer__btn}
          type="submit"
          disabled={name == undefined ? true : false}
        >
          Комментировать
        </button>
      </CommentFormControls>
    </form>
  );
}
