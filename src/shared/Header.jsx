import * as React from "react";
import { hot } from "react-hot-loader/root"

import styles from "./header.css";


function HeaderComponent() {
  return (
    <header>
      <h1  className={styles.container}>React App</h1>
      <p style={{color: "red"}}>Hello world 123+25</p>
      <p style={{color: "gold"}}>Hello world56</p>
      <p style={{color: "blue"}}>Hello test magic</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);