import React, { ReactNode } from "react";
import styles from "./genericmenulist.css";

interface IItem {
  idBtn: string;
  text: string;
  onClick?: (id: string) => void;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  type?: "submit" | "reset" | "button";
  classBtnImg?: string;
  fn: string;
  // hide: boolean;
}

interface IGenericListProps {
  list: IItem[];
  classItem?: string;
  classBtn?: string;
  hideFn?: () => void;
  id: string;
}

const NOOP = () => {}; //ничего не делает

export function GenericMenuList({
  list,
  classItem,
  classBtn,
  hideFn,
  id,
}: IGenericListProps) {
  return (
    
    <>
      {list.map(
        ({
          As = "button",
          text,
          onClick = NOOP,
          idBtn,
          href,
          fn,
          type,
          classBtnImg,
        }) => (
          <li
            className={`${styles.item} ${classItem}`}
            onClick={() => {}}
            key={idBtn}
          >
            <As
              href={href}
              type={type}
              className={`${classBtn} ${classBtnImg}`}
              onClick={ (fn === "hide") ? hideFn : 
                (fn === "console") ? ()=>console.log(id) :
                ()=>{console.log("Hi chamomile")}
              }
            >
              {text}
            </As>
          </li>
        )
      )}
    </>
  );
}