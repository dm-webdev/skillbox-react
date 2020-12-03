import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";
import { appReducer, TAppReducer } from "./appReducer/appReducer";
import { TUserReducer, userReducer } from "./userReducer/userReducer";

export type TRootReducer = {
  app: TAppReducer;
  user: TUserReducer;
}

export const rootReducer: Reducer<
  CombinedState<{
    app: TAppReducer;
    user: TUserReducer;
  }>,
  AnyAction
> = combineReducers({
  app: appReducer,
  user: userReducer,
});
