import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { TRootReducer } from "../rootReducer";
import { Action } from "redux";
import { CLEAR_USERDATA, SET_USERDATA } from "./userConst";
import { hideLoader, showAlert, showLoader } from "../appReducer/appAction";
import { uriToLink } from "../../utils/js/uriToLink";

export const setUserData = (): ThunkAction<
  void,
  TRootReducer,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  const token = getState().app.token;
  dispatch(showLoader());

  axios
    .get("https://oauth.reddit.com/api/v1/me", {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((resp) => {
      dispatch({
        type: SET_USERDATA,
        name: resp.data.name,
        iconImg: uriToLink(resp.data.icon_img),
        messageCount: resp.data.inbox_count.toString(),
      });
      dispatch(hideLoader());
    })
    .catch((er) => {
      dispatch(
        showAlert(
          `Во время загрузки данных произошла ошибка. Пожалуйста, попробуйте позднее. ${er}`
        )
      );
      dispatch(hideLoader());
    });
};


export function clearUserData() {
  return {
    type: CLEAR_USERDATA,
  };
}
