import { Reducer } from "redux";
import {
  SET_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  SHOW_ALERT,
  CLEAR_TOKEN,
} from "./appConst";

export type TAppReducer = {
  token?: string;
  isLoading: boolean;
  isAlert: boolean;
  alertText: string;
  alertType: string;
};

const initialState: TAppReducer = {
  isLoading: false,
  isAlert: false,
  alertText: "",
  alertType: "",
};

export const appReducer: Reducer<TAppReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: undefined,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        isAlert: true,
        alertText: action.text,
        alertType: action.alert_type,
      };
    case HIDE_ALERT:
      return {
        ...state,
        isAlert: false,
        alertText: "",
        alertType: "",
    };
    default:
      return state;
  };
};
