import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { TRootReducer } from "../rootReducer";
import {
  CLEAR_TOKEN,
  SET_TOKEN,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./appConst";

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token: token,
  };
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text: string, allert_name: string) {
  return {
    type: SHOW_ALERT,
    text: text,
    allert_type: allert_name,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export const saveToken = (): ThunkAction<
  void,
  TRootReducer,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  let token = getState().app.token;
  let localToken: string | undefined | null = localStorage.getItem(
    "tokenReddit"
  );
  let externalToken: string | undefined | null = window.__token__;

  if (!token) {
    if (
      localToken !== null &&
      localToken !== "undefined" &&
      localToken !== undefined
    ) {
      dispatch(setToken(localToken));
    } else if (
      externalToken !== null &&
      externalToken !== "undefined" &&
      externalToken !== undefined
    ) {
      localStorage.setItem("tokenReddit", `${window.__token__}`);
      dispatch(setToken(externalToken));
    }
  }
};
