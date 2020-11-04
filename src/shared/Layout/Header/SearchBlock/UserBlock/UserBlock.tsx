import React from "react";
import styles from "./userblock.css";
import { Icon, EIcons } from "../../../../../utils/component/Icon";
import { Ecolors, Text } from "../../../../../utils/component/Text";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
  clientId: string;
}


export function UserBlock({avatarSrc, userName, clientId}:IUserBlockProps) {
   
  return (
    <a className={styles.userBlockLink} href={`https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=random_string&redirect_uri=http://localhost:9000/auth&duration=permanent&scope=read submit identity`}>
      <div className={styles.userAvatar}>
        {avatarSrc
          ? <img src={avatarSrc} alt={userName} className={styles.avatarImg} />
          : <Icon name={EIcons.iconAvatarAnon} size={30} tabletSize={50} block />
        }
      </div>
      <div className={styles.userName}>
        <Text size={20} color={userName ? Ecolors.black : Ecolors.grey_99}>{userName || "Аноним"}</Text>
      </div>
    </a>
  );
}
