import styles from "./cardmenu.css";

export const menuList = [
  {
    idBtn: "comments",
    text: "Коментарии",
    classBtnImg: `${styles.commentsBtn}`,
    fn: "console",
  },
  {
    idBtn: "share",
    text: "Поделиться",
    classBtnImg: `${styles.shareBtn}`,
    fn: "share",
  },
  { 
    idBtn: "hide",
    text: "Скрыть",
    classBtnImg: `${styles.hideBtn}`,
    fn: "hide",
  },
  {
    idBtn: "save",
    text: "Сохранить",
    classBtnImg: `${styles.saveBtn}`,
    fn: "console",
  },
  {
    idBtn: "complain",
    text: "Пожаловаться",
    classBtnImg: `${styles.complainBtn}`,
    fn: "console",
  },
  {
    idBtn: "close",
    text: "Закрыть",
    classBtnImg: `${styles.closeBtn}`,
    fn: "console",
  },
];
