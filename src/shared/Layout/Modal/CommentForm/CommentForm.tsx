import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../../../store/appReducer/appAction";
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
  const name = useSelector<TRootReducer, string | undefined>(
    (state) => state.user.name
  );
  // const ref = useRef<HTMLDivElement>(null);
  const { value, onChange } = useContext(commentContext);
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState("");
  const dispatch = useDispatch();

  function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.preventDefault();
    onChange(ev.target.value);
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setTouched(true);
    setValueError(validateValue());
    const isFormValid = !validateValue();
    if (!isFormValid) return;

    console.log(value);
    onChange("");
    dispatch(showAlert("Форма отправлена", "info"));
  }

  function validateValue() {
    if (value.length <= 5) return "Введите более пяти символов!";
    return "";
  }

  return (
    <form
      className={styles.commentForm}
      name="CommentForm"
      onSubmit={handleSubmit}
    >
      <label>
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
          aria-invalid={valueError ? "true" : undefined}
        />

        {touched && valueError && <div>{valueError}</div>}
      </label>

      <CommentFormControls>
        <ControlsBtnGroup id={content.id} />

        <button className={styles.commentForm__btn} type="submit">
          Комментировать
        </button>
      </CommentFormControls>
    </form>
  );
}
