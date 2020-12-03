import { Reducer } from "redux";
import { CLEAR_USERDATA, SET_USERDATA } from "./userConst";

export type TUserReducer = {
  name?: string;
  iconImg?: string;
  messageCount?: string;
};

const initialState: TUserReducer = {};

export const userReducer: Reducer<TUserReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_USERDATA:
      return {
        ...state,
        name: action.name,
        iconImg: action.iconImg,
        messageCount: action.messageCount,
      };
    case CLEAR_USERDATA:
      return {
        ...state,
        name: undefined,
        iconImg: undefined,
        messageCount: undefined,
      };
    default:
      return state;
  }
};
