import React, { ReactNode } from "react";
import styles from "./genericmenulist.css";

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  type?: "submit" | "reset" | "button";
  classBtnImg?: string;
  hide: boolean;
}

interface IGenericListProps {
  list: IItem[];
  classItem?: string;
  classBtn?: string;
  hideFn?: () => void;
}

const NOOP = () => {}; //ничего не делает

export function GenericMenuList({
  list,
  classItem,
  classBtn,
  hideFn,
}: IGenericListProps) {
  return (
    <>
      {list.map(
        ({
          As = "button",
          text,
          onClick = NOOP,
          id,
          href,
          type,
          hide,
          classBtnImg,
        }) => (
          <li
            className={`${styles.item} ${classItem}`}
            onClick={() => {}}
            key={id}
          >
            <As
              href={href}
              type={type}
              className={`${classBtn} ${classBtnImg}`}
              onClick={hide ? hideFn : NOOP}
            >
              {text}
            </As>
          </li>
        )
      )}
    </>
  );
}