import * as React from "react";
import styles from "./header.css";

export function Header() {
  return (
    <header className={styles.container}>
      <h1>React App</h1>
      <p style={{color: "red"}}>Hello world</p>
      <p style={{color: "green"}}>Hello world</p>
    </header>
  );
}