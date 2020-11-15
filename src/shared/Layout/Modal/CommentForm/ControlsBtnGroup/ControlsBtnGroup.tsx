import React from "react";
import { GenericMenuList } from "../../../../../utils/component/GenericMenuList/GenericMenuList";
import { ICard } from "../../../Content/CardsList";
import styles from "./controlsbtngroup.css";
import { controlsBtnGroupList } from "./controlsBtnGroupList";

const R = require("ramda");

interface IControlsBtnGroup {
  id: string;
}

export function ControlsBtnGroup({ id }: IControlsBtnGroup) {  
  return (
    <ul className={styles.btnGroup}>
      <GenericMenuList
        id={id}
        classItem={styles.control__item}
        classBtn={styles.control__btn}
        list={controlsBtnGroupList.map(
          R.merge({ As: "button" as const, type: "button" })
        )}
      />
    </ul>
  );
}
