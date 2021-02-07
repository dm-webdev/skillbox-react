import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, hideAlert } from "../../../../store/appReducer/appAction";
import { TRootReducer } from "../../../../store/rootReducer";
import { clearUserData } from "../../../../store/userReducer/userAction";
import styles from "./alert.css";

export function Alert() {
  const dispatch = useDispatch();
  const text = useSelector<TRootReducer, string | undefined>(
    (state) => state.app.alertText
  );

  const alert_type = useSelector<TRootReducer, string | undefined>(
    (state) => state.app.alertType
  );

  const handleClick = () => {
    if (alert_type === "alert") {
      dispatch(hideAlert());
      dispatch(clearUserData());
      localStorage.removeItem("tokenReddit");
      window.__token__ = undefined;
      dispatch(clearToken());
    }
  };

  if (alert_type === "info") {
    setTimeout(() => dispatch(hideAlert()), 2000);
  }

  return (
    <div className={styles.alert}>
      <p className={styles.alert__desc}>{text}</p>
      {alert_type === "alert" ? (
        <button className={styles.btn} onClick={handleClick}>
          скрыть
        </button>
      ) : null}
    </div>
  );
}
