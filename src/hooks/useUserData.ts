import {useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
  name?: string;
  iconImg?: string;
  messageCount?: string;
  loading?: boolean;
}

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token.length > 10) {
      setData({
        loading: true,
      });

      axios
      .get("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {        
        const userData = resp.data;        
        setData({
          name: userData.name,
          iconImg: userData.icon_img,
          messageCount: userData.inbox_count.toString(),
          loading: false,
        });            
      })
      .catch(console.log);
    } else {console.log("no token")};   
  }, [token]);

  return [data]
}