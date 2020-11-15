import React, { Children } from 'react';
import styles from './sidebar.css';

interface ISideBar {
  children: React.ReactNode;
}

export function SideBar({ children }: ISideBar) {
  return (
    <div className={styles.sideBar}>
        { children }
    </div>
  );
}
