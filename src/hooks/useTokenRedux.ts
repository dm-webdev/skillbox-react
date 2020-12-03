import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/appReducer/appAction";

export function useTokenRedux() {
  const dispatch = useDispatch();
  let localToken: string | undefined | null;
  let externalToken: string | undefined | null;
  if (typeof window !== "undefined") {
    localToken = localStorage.getItem("tokenReddit");
    externalToken = window.__token__;
  }

  useEffect(() => {
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
  }, [localToken, externalToken]);
}
