import React, { ChangeEvent, FormEvent, useContext } from "react";
import { useSelector } from "react-redux";
import { TRootReducer } from "../../../../store/rootReducer";
import { commentContext } from "../../../context/commentContext";
import { ICard } from "../../Content/CardsList";
import styles from "./commentform.css";
import { CommentFormControls } from "./CommentFormControls";
import { ControlsBtnGroup } from "./ControlsBtnGroup";

interface ICommentForm {
  content: ICard;
}

export function CommentForm({ content }: ICommentForm) {
  const name = useSelector<TRootReducer, string | undefined>(state => state.user.name);

  const { value, onChange } = useContext(commentContext);

  // const [value, setValue] = useState("");

  function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.preventDefault();
    onChange(ev.target.value);
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    console.log(value);
    onChange("");
  }

  return (
    <form
      className={styles.commentForm}
      name="CommentForm"
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.commentForm__text}
        name="commentText"
        rows={4}
        placeholder={
          name == undefined
            ? "Чтобы оставить отзыв, пожалуйста зарегистрируйтесь"
            : `${name} , оставьте ваш комментарий`
        }
        value={value}
        onChange={handleChange}
      />

      <CommentFormControls>
        <ControlsBtnGroup id={content.id} />

        <button
          className={styles.commentForm__btn}
          type="submit"
          disabled={name == undefined ? true : false}
        >
          Комментировать
        </button>
      </CommentFormControls>
    </form>
  );
}
