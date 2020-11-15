import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { createCollection } from "../utils/js/createCollection";

import { ICard } from "../shared/Layout/Content/CardsList/CardsList";
import { tokenContext } from "../shared/context/tokenContext";

export function useBestArticles() {
  const token = useContext(tokenContext);
  const [cardList, setList] = useState<ICard[]>([]);

  useEffect(() => {
    if (token.length > 10) {
      axios
        .get("https://oauth.reddit.com/best", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const collection = resp.data.data.children;
          // console.log(collection);
          console.log(resp);
          const bestArticles = createCollection(collection, "data");
          setList(bestArticles);
        })
        .catch(console.log);
    } else {
      console.log("no token");
    }
  }, [token]);

  return [cardList];
}
