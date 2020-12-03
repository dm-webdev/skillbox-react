import React, { useEffect } from "react";
import styles from "./userblock.css";
import { Icon, EIcons } from "../../../../../utils/component/Icon";
import { Ecolors, Text } from "../../../../../utils/component/Text";
import { useDispatch, useSelector } from "react-redux";
import { TRootReducer } from "../../../../../store/rootReducer";
import { clearUserData, setUserData } from "../../../../../store/userReducer/userAction";
import { clearToken } from "../../../../../store/appReducer/appAction";

export function UserBlock() {
  const token = useSelector<TRootReducer, string | undefined>(state => state.app.token);
  const userName = useSelector<TRootReducer, string | undefined>(state => state.user.name);
  const userImg = useSelector<TRootReducer, string | undefined>(state => state.user.iconImg);
  const dispatch = useDispatch();

  useEffect(()=>{
    if (token) {
      dispatch(setUserData());
    };
  }, [token, dispatch]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (token) {
      event.preventDefault();
      dispatch(clearUserData());
      dispatch(clearToken());
      localStorage.removeItem("tokenReddit");
      window.__token__ = undefined;
    }
  }

  return (
    <a className={styles.userBlockLink} 
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:9000/auth&duration=permanent&scope=read submit identity`} 
        onClick={handleClick}
        >
      <div className={styles.userAvatar}>
        {(userName)
          ? <img src={userImg} alt={userName} className={styles.avatarImg} />
          : <Icon name={EIcons.iconAvatarAnon} size={30} tabletSize={50} block />
        }
      </div>

      <div className={styles.userName}>
        <Text size={20} color={(userName) ? Ecolors.black : Ecolors.grey_99}>{ userName || "Аноним" }</Text>
      </div>
    </a>
  );
}
