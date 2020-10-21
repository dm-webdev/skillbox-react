import React from "react";
import { Dropdown } from "../../../../../utils/component/Dropdown";
import { GenericMenuList } from "../../../../../utils/component/GenericMenuList/GenericMenuList";
import styles from "./cardmenu.css";
import { menuList } from "./menuList";

const R = require("ramda");

interface ICardMemu {
  hideFn?: () => void;
}

export function CardMenu({ hideFn }: ICardMemu) {
  return (
    <Dropdown
      styleClass={styles.menu}
      button={
        <button
          className={styles.menuButton}
          aria-label="развернуть меню"
        ></button>
      }
    >
      <ul className={styles.menuList}>
        <GenericMenuList
          hideFn={hideFn}
          classItem={styles.menu__item}
          classBtn={styles.menu__btn}
          list={menuList.map(
            R.merge({ As: "button" as const, type: "button" })
          )}
        />
      </ul>
    </Dropdown>
  );
}
