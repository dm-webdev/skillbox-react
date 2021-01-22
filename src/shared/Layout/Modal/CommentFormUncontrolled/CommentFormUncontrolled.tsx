import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../../../store/appReducer/appAction";
import { TRootReducer } from "../../../../store/rootReducer";
import { CommentFormControls } from "../CommentForm/CommentFormControls";
import { ControlsBtnGroup } from "../CommentForm/ControlsBtnGroup";
import styles from "./commentformuncontrolled.css";

interface ICommentFormUncontrolled {
  id: string;
}

export function CommentFormUncontrolled({ id }: ICommentFormUncontrolled) {
  const name = useSelector<TRootReducer, string | undefined>(
    (state) => state.user.name
  );

  const ref = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const [value, setValue] = useState("")
  const [touched, setTouched] = useState(false)
  const [valueError, setValueError] = useState("")

  function handleChange(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.preventDefault();
    setValue(ev.target.value);
  }


  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setTouched(true);
    setValueError(validateValue());
    const isFormValid = !validateValue();
    if (!isFormValid) return;

    console.log(value);
    setValue("");    
    dispatch(showAlert("Форма отправлена", "info"))    
  }
 

  function validateValue() {
    if (value.length <= 5) return "Введите более пяти символов!";
    return "";
  }

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <form
      className={styles.commentFormAnswer}
      name="CommentFormAnswer"
      onSubmit={handleSubmit}
    >
      <label>
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
          value={value}
          onChange={handleChange}
          aria-invalid={valueError ? "true" : undefined}
        />

        {touched && valueError && <div>{valueError}</div>}
      </label>

      <CommentFormControls>
        <ControlsBtnGroup id={id} />
        <button
          className={styles.commentFormAnswer__btn}
          type="submit"
          // disabled={name == undefined ? true : false}
        >
          Комментировать
        </button>
      </CommentFormControls>
    </form>
  );
}
