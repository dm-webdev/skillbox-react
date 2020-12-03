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
};

export function clearToken() {
  return {
    type: CLEAR_TOKEN,
  };
};

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
};

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
};

export function showAlert(text: string) {
  return {
    type: SHOW_ALERT,
    text: text,
  };
};

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
};
