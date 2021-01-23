import { useEffect, useState } from "react";
import axios from "axios";
import { createCollection } from "../utils/js/createCollection";
import { useDispatch, useSelector } from "react-redux";
import { TRootReducer } from "../store/rootReducer";
import { hideLoader, showAlert, showLoader } from "../store/appReducer/appAction";
import { ICard } from "../store/contentReducer/contentReducer";

export function useBestArticles() {
  const token = useSelector<TRootReducer, string | undefined> (state => state.app.token);
  const dispatch = useDispatch();
  const [cardList, setList] = useState<ICard[]>([]);

  useEffect(() => {
    if (token) {      
      // console.log(token);
      dispatch({type: "go_best"})
      dispatch(showLoader());
      axios
        .get("https://oauth.reddit.com/best", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const collection = resp.data.data.children;
          // console.log(resp);
          const bestArticles = createCollection(collection, "data");
          setList(bestArticles);
          dispatch(hideLoader());
        })
        .catch((er) => {
          dispatch(showAlert(`Что-то пошло не так при загрузке статей. Пожалуйста, попробуйте попытку позднее. ${er}`, "alert"));
          dispatch(hideLoader());
        });
    };
  }, [token]);

  return [cardList];
}
