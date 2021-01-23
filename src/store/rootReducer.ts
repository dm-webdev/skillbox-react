import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";
import { appReducer, TAppReducer } from "./appReducer/appReducer";
import { contentReducer, TContentReducer } from "./contentReducer/contentReducer";
import { TUserReducer, userReducer } from "./userReducer/userReducer";

export type TRootReducer = {
  app: TAppReducer;
  user: TUserReducer;
  content: TContentReducer;
}

export const rootReducer: Reducer<
  CombinedState<{
    app: TAppReducer;
    user: TUserReducer;
    content: TContentReducer;
  }>,
  AnyAction
> = combineReducers({
  app: appReducer,
  user: userReducer,
  content: contentReducer,
});
