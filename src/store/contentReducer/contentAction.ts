import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { createCollection } from "../../utils/js/createCollection";
import { hideLoader, showAlert, showLoader } from "../appReducer/appAction";
import { TRootReducer } from "../rootReducer";
import { GET_ARTICLES } from "./contentConst";

export const getArticles = (): ThunkAction<
  void,
  TRootReducer,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  dispatch({ type: "go_best" });
  const token = getState().app.token;
  const before = getState().content.cursor_num;

  dispatch(showLoader());
  axios
    .get("https://oauth.reddit.com/best", {
      headers: { Authorization: `bearer ${token}` },
      params: {limit: 15, after: before}
    })
    .then((resp) => {
      const collection = resp.data.data.children;
      const after = resp.data.data.after;
      const bestArticles = createCollection(collection, "data");

      dispatch({
        type: GET_ARTICLES,
        articles: bestArticles,
        cursor_num: after,
      });
      dispatch(hideLoader());
    })
    .catch((er) => {
      dispatch(
        showAlert(
          `Что-то пошло не так при загрузке статей. Пожалуйста, попробуйте попытку позднее. ${er}`,
          "alert"
        )
      );
      dispatch(hideLoader());
    });
};
