import styles from "./cardmenu.css";

export const menuList = [
  {
    id: "comments",
    text: "Коментарии",
    classBtnImg: `${styles.commentsBtn}`,
    hide: false,
  },
  {
    id: "share",
    text: "Поделиться",
    classBtnImg: `${styles.shareBtn}`,
    hide: false,
  },
  { 
    id: "hide",
    text: "Скрыть",
    classBtnImg: `${styles.hideBtn}`,
    hide: true,
  },
  {
    id: "save",
    text: "Сохранить",
    classBtnImg: `${styles.saveBtn}`,
    hide: false,
  },
  {
    id: "complain",
    text: "Пожаловаться",
    classBtnImg: `${styles.complainBtn}`,
    hide: false,
  },
  {
    id: "close",
    text: "Закрыть",
    classBtnImg: `${styles.closeBtn}`,
    hide: false,
  },
];
