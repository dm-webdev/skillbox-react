import React from "react";
import { Dropdown } from "../../../../../utils/component/Dropdown";
import { GenericMenuList } from "../../../../../utils/component/GenericMenuList/GenericMenuList";
import { IconMenuBtn } from "../../../../Icons/IconMenuBtn";
import styles from "./cardmenu.css";
import { menuList } from "./menuList";

const R = require("ramda");

interface ICardMemu {
  id: string;
  hideFn?: () => void;
}

export function CardMenu({ hideFn, id }: ICardMemu) {
  return (
    <Dropdown
      id={ id }
      styleClass={styles.menu}
      button={
        <button
          className={styles.menuButton}
          aria-label="развернуть меню"
        >
          <IconMenuBtn />
        </button>
      }
    >
      <ul className={styles.menuList}>
        <GenericMenuList
          hideFn={hideFn}
          id={ id }
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
