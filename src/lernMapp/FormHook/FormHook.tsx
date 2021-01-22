import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./formhook.css";
import { Field, Formik } from "formik";
import { ChangeEvent } from "react";
import { showAlert } from "../../store/appReducer/appAction";

export function FormHook() {
  const [valueText, setValue] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const dispatch = useDispatch();

  function handleChangeText(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.preventDefault();
    setValue(ev.target.value);
  }

  function handleChangeEmail(ev: ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    setValueEmail(ev.target.value);
  }

  function validateEmail(value: string | undefined) {
    let error;
    if (!value) {
      error = "Поле обязательно для ввода";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Введите действующий E-mail.";
    }
    return error;
  }

  function validateText(value: string | undefined) {
    let error;
    if (value && value.trim().length < 5) {
      error = "Длина текста должна быть больше пяти символов.";
    } else if (value && value.trim().length > 300) {
      error = "Длина текста не должна превышать трехсот символов.";
    }
    return error;
  }

  return (
    <div className={styles.testForm}>
      <Formik
        initialValues={{ email: valueEmail, text_of_message: valueText }}

        onSubmit={() => {
          dispatch(showAlert("Форма отправлена", "info"))
          console.log(valueEmail, valueText);      
          setValue("");
          setValueEmail("");
        }}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit} className={styles.testForm}>
            <label className={styles.testFormLabel}>
              Поле ввода комментария:
              <Field
                className={styles.testFormText}
                type="text"
                name="text_of_message"                
                onChange={handleChangeText}
                onBlur={handleBlur}
                value={valueText}
                validate={() => validateText(valueText)}
                placeholder={"Оставьте ваш комментарий"}
              />
              {errors.text_of_message &&
              touched.text_of_message &&
              errors.text_of_message ? (
                <div className={styles.testFormAllert}>
                  {errors.text_of_message}
                </div>
              ) : null}
            </label>
            <label className={styles.testFormLabel}>
              Поле ввода E-mail:
              <Field
                className={styles.testFormText}
                type="email"
                name="email"
                onChange={handleChangeEmail}
                value={valueEmail}                
                validate={() => validateEmail(valueEmail)}
                placeholder={"Введите ваш E-mail"}
              />
              {errors.email && touched.email && errors.email ? (
                <div className={styles.testFormAllert}>{errors.email}</div>
              ) : null}
            </label>

            <button
              type="submit"
              className={styles.testFormBtn}
            >
              Отправить
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}